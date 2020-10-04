const router = require('express').Router()
const User = require('../models/User')
const jwt = require('jsonwebtoken')
const { registerValidation, loginValidation } = require('../validation')
const bcrypt = require('bcryptjs')
const { Router } = require('express')


router.post('/register', async (req, res) => {

    // VALIDATE DATA
    const { error } = registerValidation(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    // CHECK FOR EXISTING USER
    const userExist = await User.findOne({ username: req.body.username })
    if (userExist) {
        return res.status(400).send('Username already exists')
    }

    // HASH PASSWORDS
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(req.body.password, salt)

    // CREATE NEW USER
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashPassword
    })
    try {
        await user.save()
        res.send({ user: user._id })
    } catch (err) {
        res.status(400).send(err)
    }
})

// DELETE USER
router.delete('/', (req, res) => {
    User.findOneAndDelete({ username: req.body.username }, function (err) {
        if (err) {
            console.log(err)
        }
        else {
            res.send("Deleted User");
        }
    });
})

// LOGIN
router.post('/login', async (req, res) => {
    const { error } = loginValidation(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    const user = await User.findOne({ username: req.body.username })
    if (!user) return res.status(400).send('Email or password is not correct')

    const validPas = await bcrypt.compare(req.body.password, user.password)
    if (!validPas) return res.status(400).send('Email or password is not correct')

    // CREATE AND ASIGN TOKEN
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET)
    res.header('auth-token', token)

    res.send('Logged in')

})


module.exports = router

