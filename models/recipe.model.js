const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        unique: true,
        default: 'Name of recipe to be included',     },

    ingredients: {
        type: [String],
        required: true,
        default: ['Ingredients to be added']
    },

    difficulty: {
        type: String,
        enum: ['Easy', 'Amateur', 'Chef'] //añadir iconos de dificultad
    },

    steps: {
        type: [String],
        required: true, 
        default: ['Steps to be included'],

    },

}, {

    timestamps: true
})

const Recipe = mongoose.model('Recipe', recipeSchema)

module.exports = Recipe