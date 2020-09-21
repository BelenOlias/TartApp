const express = require('express')
const router = express.Router()
const Recipe = require('../models/recipe.model')


//List of recipes
router.get('/', (req, res, next) => {

    Recipe.find()
        .then(recipes => res.render('recipes/recipes-list', { recipes }))
        .catch(err => next(err))
})

//Add a recipe to myRecipes

// window.addEventListener('load', () => {
//     document.getElementById('myRecipe').addEventListener('click', function (event) {

//         event.preventDefault()

//         const id = req.params.recipe_id

//         Recipe.findById(id)
//             .then(place => myRecipe.create(place))
//             .catch(err => console.log(err))

//     })
// })

//New recipe

router.get('/new', (req, res, next) => res.render('recipes/new-recipe'))

router.post('/new', (req, res, next) => {

    const { name, ingredients, steps, difficulty } = req.body

    

    Recipe.create({ name, ingredients, steps, difficulty })
        .then(() => res.redirect('/recipes'))
        .catch(err => next(err))

})


//Details of a recipe
router.get('/:recipe_id', (req, res, next) => {

    const id = req.params.recipe_id

    Recipe.findById(id)
        .then(details => {
            console.log(details.ingredients)
            res.render('recipes/recipe-details', { details })
        } )
        .catch(err => next(err))
})

//Edit recipe

router.get('/:recipe_id/edit', (req, res, next) => {

    const id = req.params.recipe_id

    

    Recipe.findById(id)
        .then(details => res.render('recipes/recipe-edit', details))
        .catch(err => next(err))
})


router.post('/:recipe_id/edit', (req, res, next) => {

    const id = req.params.recipe_id

    const { name, ingredients, difficulty } = req.body

    Recipe.findByIdAndUpdate(id, { name, ingredients, difficulty })
        .then(() => res.redirect('/recipes'))
        .catch(err => next(err))

})









module.exports = router