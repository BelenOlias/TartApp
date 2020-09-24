const express = require('express')
const Recipe = require('../models/recipe.model')
const User = require('../models/user.model')
const router = express.Router()


const checkLoggedIn = (req, res, next) => req.isAuthenticated() ? next() : res.render('auth/login', { message: 'Unidentified, please log in to continue' })

const checkRole = rolesToCheck => {
    return (req, res, next) => {
        if (req.isAuthenticated() && rolesToCheck.includes(req.user.role)) {
            next()
        } else {
            res.render('auth/login', {
                message: 'Desautorizado, no tienes permisos para ver eso.'
            })
        }
    }
}


// Endpoints

router.get('/', (req, res) => res.render('index'))

router.get('/welcome', checkLoggedIn, (req, res) => res.render('welcome'))

router.get('/profile', checkLoggedIn, (req, res, next) => res.render('auth/profile', req.user))

router.get('/profile/myRecipes', checkLoggedIn, (req, res, next) => {

    const user = req.user

    const id = req.user._id

    User.findById(id)
        .then(user => res.render('auth/myRecipes', user))
        .catch(err => next(err))

})


router.post('/profile/myRecipes/:recipe_name', checkLoggedIn, (req, res, next) => {

    const recipeName = req.params.recipe_name

    const { _id, favourites } = req.user

    console.log(recipeName)

    let temporalFav = [...favourites]

    let newFav = temporalFav.filter(elm => !(elm.includes(recipeName)))
    
     User.findByIdAndUpdate({ _id }, { favourites: newFav })
        .then(() => res.redirect('/profile/myRecipes'))
        .catch(err => next(err))
    
})


router.get('/recipes/:recipe_id/delete', checkRole(['Admin']), (req, res, next) => {

    const id = req.params.recipe_id

    Recipe.findByIdAndRemove(id)
        .then(() => res.redirect('/recipes'))
        .catch(err => (next))
})

module.exports = router
