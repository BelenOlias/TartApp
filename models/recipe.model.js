const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },

    ingredients: {
        type: [String],
        required: true
    },

    difficulty: {
        type: String,
        enum: ['Easy', 'Amateur', 'Chef'] //añadir iconos de dificultad
    },

    steps: {
        type: [String],
        required: true
    },

}, {

    timestamps: true
})

const Recipe = mongoose.model('Recipe', recipeSchema)

module.exports = Recipe