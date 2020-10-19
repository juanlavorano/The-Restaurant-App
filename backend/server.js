const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const User = require('./models/User')
const verifyToken = require('./routes/verifyTokens')
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken');

//ACCESS - CONTROL - ALLOW - ORIGIN
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    ;
    next();
});


// DOTENV
dotenv.config()

// CONNECT TO MONGODB
mongoose.set('useUnifiedTopology', true)
mongoose.connect(process.env.DB_CONNECT,
    { useNewUrlParser: true }
    , () => console.log('Connected to DB'))

// ROUTES MIDDLEWARES
app.use(express.json())
app.use(cookieParser())


// ROUTES
// Get user ID
app.get('/api/get/user', (req, res) => {
    User.find({}, (err, users) => {
        if (err) {
            res.status(400).send(err)
        } else {
            res.send(users)
        }
    })
})

//TOKEN VERIFICATION
app.get('/api/user/verify', (req, res) => {
    const token = req.header('auth_token')
    if (!token) return res.status(401).send('Access denied')

    try {
        jwt.verify(token, process.env.TOKEN_SECRET)
        res.status(200).send('Authorised')
    } catch {
        res.status(400).status('Invalid Token')
    }
})



// IMPORT ROUTES
const authRoute = require('./routes/auth')
app.use('/api/user', authRoute)

const itemRoute = require('./routes/item')
app.use('/api/item', itemRoute)


const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log('Connected to port ' + port)
})