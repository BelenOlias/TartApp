
window.addEventListener('load', () => {
    const button = document.querySelectorAll('#heart')
        
    button.forEach(function (btn) {
            btn.addEventListener('click', function (event) {

                event.preventDefault()
                
                console.log(event.target)
        
            })

       
                
        const id = req.params.recipe_id

        Recipe.findById(id)
            .then(recipe => User.favourites.push(recipe))
            .catch(err => console.log('Hubo un error!', err))

    })
})

