const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,

    },

    speciality: {
        type: String
    },

    location: {
        type: {
            type: String
        },
        coordinates: [Number]
    },

}, {

    timestamps: true
})

const Place = mongoose.model('Place', placeSchema)

module.exports = Place

