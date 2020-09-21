const express = require('express')
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

router.get('/recipes/:recipe_id/delete', checkRole(['Admin']), (req, res, next) => res.send('AQUÍ ESTÁ LA SUPRESIÓN DE LA DOCUEMNTACIÓN'))
//cambiar res.render de esta ruta



// router.get('/:place_id', checkLoggedIn, (req, res, next) => {

//     const id = req.params.place_id

//     Place.findById(id)
//         .then(place => myPlace.create(place))
//         .then(() => res.redirect('/places'))
//         .catch(err => console.log(err))

// })


module.exports = router
