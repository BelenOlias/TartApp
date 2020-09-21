const mongoose = require('mongoose')

const dbName = 'bootcamp-project2'
mongoose.connect(`mongodb://localhost/${dbName}`, { useNewUrlParser: true, useUnifiedTopology: true })

//Places

const Place = require('../models/place.model')

const places = [

    {
        name: 'Moulin Chocolat',
        speciality: 'Macarons',
        location: {
            type: 'Point',
            coordinates: [40.420793, -3.686789]
        }
    },

    {
        name: 'Pomme Sucre',
        specialty: 'Croissants',
        location: {
            type: 'Point',
            coordinates: [40.424375, -3.695515]
        }
    },

    {
        name: 'La Duquesita',
        specialty: 'Panettone',
        location: {
            type: 'Point',
            coordinates: [40.425786, -3.696983]
        }
    },

    {
        name: 'Mallorca',
        specialty: 'Puff pastry',
        location: {
            type: 'Point',
            coordinates: [40.427059, -3.694387]
        }
    },

    {
        name: 'Celicioso',
        specialty: 'Gluten free products',
        location: {
            type: 'Point',
            coordinates: [40.420469, -3.701071]
        }
    }
]

mongoose.connection.collections['places'].drop()

Place.create(places) 
    .then(places => console.log(`Se han creado ${places.length} lugares en la DDBB`))
    .catch(err => console.log(err))


//Recetas

const Recipe = require('../models/recipe.model')

const recipes = [

    {
        name: 'Carrot cake',
        ingredients: ['500g shredded carrots', '4 eggs', '300g flour', '300g sugar', '170g sunflower oil', '15g cocoa powder', '5g baking powder'],
        difficulty: 'Amateur',
        steps: ['Mix the dry ingredients without the sugar', 'Beat the eggs with sugar and sunflower oil until combined', 'Add the dry ingredients mix in batches', 'Add the shredded carrots and keep mixin until incorporated', 'Bake at 180ºC for 45 minutes']
    },

    {
        name: 'Chocolate Chip Cookies',
        ingredients: ['250g flour', '180g softened butter', '2 eggs', 'Cinnamon', '170g chocolate chips', '100g brown sugar', '100g sugar', '5g baking powder'],
        difficulty: 'Amateur',
        steps: ['Mix the flour with the baking powder and a pinch of salt', 'Combine sugar, brown sugar and butter', 'Beat in eggs until fluffy', 'Mix in all the dry ingredients until combined', 'Add the chocolate chips and cinnamon', 'Roll the dough and cut small pieces. Bake them at 170ºC for 8 minutes']
    },

    {
        name: 'Cheesecake',
        ingredients: ['150g digestive cookies', '500g cream cheese', '2 lemons', '150g sugar', '4 eggs', '100g melted butter', '350ml heavy cream'],
        difficulty: 'Easy',
        steps: ['Mix the heavy cream with the lemon juice in a bowl', 'Crush the cookies and mix them with the melted butter. Use this mix to fill the bottom of the mold', 'In a mixing bowl, combine the cream cheese, sugar, eggs and heavy cream. Fill the mold with the mix', 'Bake in the oven at 180ºC for an hour']
    },

    {
        name: 'Macarons',
        ingredients: ['100g almond flour', '80g powdered sugar', '4 egg whites', 'Strawberry jam', '200g sugar'],
        difficulty: 'Chef',
        steps: ['In a mixing bowl, combine the powdered sugar and almond flour until extra fine', 'In a separate bowl, beat the egg whites until soft peaks form. Gradually add the sugar until incorporated', 'Add the sifted almond flour mixture at a time to the beaten egg whites and use a spatula to gently fold until combined', 'Transfer the macaron batter into a piping bag fitted with a round tip', 'Pipe the macarons onto the parchment paper in 3cm circles', 'Let the macarons sit at room temperature for 30 minutes to 1 hour, until dry to the touch', 'Bake the macarons for 17 minutes at 140ºC. Fill them with the strawberry jam when cold']
    }

]

mongoose.connection.collections['recipes'].drop()

Recipe.create(recipes)
    .then(recipes => console.log(`Se han creado ${recipes.length} recetas en la DDBB`))
    .catch(err => console.log(err))


//Usuarios 

// const passport = require('passport')
// const bcrypt = require('bcrypt')
// const bcryptSalt = 10

const User = require('../models/user.model')

const users = [

    {
        username: 'Mafalda',
        password: '123',
        role: 'Admin'
    }

]

// users.forEach(elm => {

//     const salt = bcrypt.genSaltSync(bcryptSalt)
//     const hashPass = bcrypt.hashSync(users.password, salt)
// })


mongoose.connection.collections['users'].drop()

// User.create(users[{ name, password: hashPass, role }])
    
User.create(users)
    .then(users => console.log(`Se han creado ${users.length} usuarios en la DDBB`))
    .catch(err => console.log(err))
