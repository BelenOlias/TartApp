const express = require('express')
const router = express.Router()
const Place = require('../models/place.model')
// const myPlace = require('../models/myPlace.model')



//Places List
router.get('/', (req, res, next) => {

    Place.find()
        .then(places => res.render('places/places-list', { places }))
        .catch(err => next(err))
    
})

//Add a place to myPlaces

// window.addEventListener('load', () => {
//     document.getElementById('myPlace').addEventListener('click', function (event) {

//         event.preventDefault()

//         const id = req.params.place_id

//         Place.findById(id)
//             .then(place => myPlace.create(place))
//             .catch(err => console.log(err))
    
//     })
// })




//Add a new place

router.get('/new', (req, res, next) => res.render('places/new-place'))

router.post('/new', (req, res, next) => {

    const { name, latitude, longitude } = req.body

    Place.create({ name, location: { type: 'Point', coordinates: [latitude, longitude] } })
        .then(() => res.redirect('/places'))
        .catch(err => next(err))
    
})


module.exports = router