const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const User = require('./models/User')


//ACCESS - CONTROL - ALLOW - ORIGIN
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
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

// IMPORT ROUTES
const authRoute = require('./routes/auth')
app.use('/api/user', authRoute)

// AUTHORIZATION
function authenticateToken(req, res, next) {
    const authHeader = req.header['auth-token']
}

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log('Connected to port ' + port)
})