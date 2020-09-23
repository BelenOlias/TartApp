const express = require('express')
const router = express.Router()
const Recipe = require('../models/recipe.model')
const User = require('../models/user.model')



const checkLoggedIn = (req, res, next) => req.isAuthenticated() ? next() : res.render('auth/login', {
    message: 'Unidentified, please log in to continue'
})


//List of recipes
router.get('/', checkLoggedIn, (req, res, next) => {

    Recipe.find()
        .then(recipes => res.render('recipes/recipes-list', { recipes }))
        .catch(err => next(err))
})


//New recipe

router.get('/new', checkLoggedIn, (req, res, next) => res.render('recipes/new-recipe'))

router.post('/new', (req, res, next) => {

    const { name, ingredients, steps, difficulty } = req.body

    console.log(req.body)
    

    Recipe.create({ name, ingredients, steps, difficulty })
        .then(() => res.redirect('/recipes'))
        .catch(err => next(err))

})


//Details of a recipe
router.get('/:recipe_id', checkLoggedIn, (req, res, next) => {

    const id = req.params.recipe_id

    Recipe.findById(id)
        .then(details => res.render('recipes/recipe-details', { details }))
        .catch(err => next(err))
})

//Edit recipe

router.get('/:recipe_id/edit', checkLoggedIn, (req, res, next) => {

    const id = req.params.recipe_id

    Recipe.findById(id)
        .then(details => res.render('recipes/recipe-edit', details))
        .catch(err => next(err))
})


router.post('/:recipe_id/edit', checkLoggedIn, (req, res, next) => {

    const id = req.params.recipe_id

    const { name, ingredients, steps, difficulty } = req.body

    console.log(req.body)

    Recipe.findByIdAndUpdate(id, { name, ingredients, steps, difficulty })
        .then(() => res.redirect('/recipes'))
        .catch(err => next(err))

})

//Add recipe to myRecipes

router.post("/:recipe_id/favourites", checkLoggedIn, (req, res, next) => {
    const id = req.params.recipe_id;
    const { _id, favourites } = req.user;
    
    Recipe.findById(id)
        .then((recipe) => recipe.name)
        .then((recipeName) => {
            let temporalFav = [...favourites, recipeName];
            return User.findByIdAndUpdate({ _id}, { favourites: temporalFav })
        })
        .then(res.redirect("/recipes"))
        .catch((err) => next(err));
});



module.exports = router