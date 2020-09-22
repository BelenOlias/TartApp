const express = require('express')
const router = express.Router()
const passport = require('passport')

const User = require('../models/user.model')

const checkLoggedIn = (req, res, next) => req.isAuthenticated() ? next() : res.render('auth/login', { message: 'Unidentified, please log in to continue' })

const bcrypt = require('bcrypt')
const bcryptSalt = 10

// Signup

router.get('/signup', (req, res, next) => res.render('auth/signup'))
router.post('/signup', (req, res, next) => {

    const { username, password } = req.body

    if (username.length === 0 || password.length === 0) {
        res.render('auth/signup', {
            message: 'Please indicate your username and password'
        })
        return
    }

    User.findOne({ username })
        .then(user => {
            if (user) {
                res.render('auth/signup', {
                    message: 'The username already exists'
                })
                return
            }

            const salt = bcrypt.genSaltSync(bcryptSalt)
            const hashPass = bcrypt.hashSync(password, salt)

            User.create({
                    username,
                    password: hashPass
                })
                .then(() => res.render('welcome'))
                .catch(error => next(error)) 
        })
        .catch(error => next(error))
})


// Login

router.get('/login', (req, res, next) => res.render('auth/login', {
    'message': req.flash('error')
}))

router.post("/login", passport.authenticate('local', {
    successRedirect: '/welcome',
    failureRedirect: '/login',
    failureFlash: true,
    passReqToCallback: true
}))


// Logout

router.get('/logout', (req, res, next) => {
    req.logout()
    res.redirect('/')
})

module.exports = router