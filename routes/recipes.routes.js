const express = require('express')
const router = express.Router()
const Recipe = require('../models/recipe.model')
const User = require('../models/user.model')

const checkLoggedIn = (req, res, next) => req.isAuthenticated() ? next() : res.render('auth/login', {
    message: 'Unidentified, please log in to continue'
})



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

    console.log(req.body)
    

    Recipe.create({ name, ingredients, steps, difficulty })
        .then(() => res.redirect('/recipes'))
        .catch(err => next(err))

})


//Details of a recipe
router.get('/:recipe_id', (req, res, next) => {

    const id = req.params.recipe_id

    Recipe.findById(id)
        .then(details => res.render('recipes/recipe-details', { details }))
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

    const { name, ingredients, steps, difficulty } = req.body

    console.log(req.body)

    Recipe.findByIdAndUpdate(id, { name, ingredients, steps, difficulty })
        .then(() => res.redirect('/recipes'))
        .catch(err => next(err))

})

//Add recipe to myRecipes

router.get('/:recipe_id/post', checkLoggedIn, (req, res, next) => {

    const id = req.params.recipe_id

    const { _id } = req.user

   // let favs = []

    let temporalFav = [...req.user.favourites,...favourites]

    Recipe.findById(id)
        .then(recipe => {
            req.user.favourites.push(recipe.name)
            // favs.push(recipe.name)
            User.findByIdAndUpdate({ _id }, { favourites: temporalFav })
            console.log(req.user)
            res.redirect('/recipes')
        })

        .catch(err => next(err))

})




module.exports = router