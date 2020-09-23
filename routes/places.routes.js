const express = require('express')
const router = express.Router()
const Place = require('../models/place.model')

const checkLoggedIn = (req, res, next) => req.isAuthenticated() ? next() : res.render('auth/login', {
    message: 'Unidentified, please log in to continue'
})

//Places List
router.get('/', checkLoggedIn, (req, res, next) => {

    Place.find()
        .then(places => res.render('places/places-list', { places }))
        .catch(err => next(err))
    
})


//Add a new place

router.get('/new', checkLoggedIn, (req, res, next) => res.render('places/new-place'))

router.post('/new', checkLoggedIn, (req, res, next) => {

    const { name, latitude, longitude } = req.body

    Place.create({ name, location: { type: 'Point', coordinates: [latitude, longitude] } })
        .then(() => res.redirect('/places'))
        .catch(err => next(err))
    
})


module.exports = router