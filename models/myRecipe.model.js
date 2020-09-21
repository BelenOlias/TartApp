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
    }

}, {

    timestamps: true
})

const myRecipe = mongoose.model('myRecipe', recipeSchema)

module.exports = myRecipe