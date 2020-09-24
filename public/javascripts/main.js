(function () {

    const applyScrollEffects = () => {

        const isInViewport = el => {
            const rect = el.getBoundingClientRect()
            const vertInView = (rect.top <= window.innerHeight) && ((rect.top + rect.height) >= 0)
            const horInView = (rect.left <= window.innerWidth) && ((rect.left + rect.width) >= 0)
            return (vertInView && horInView)
        }

        // Reveal effects
        document.querySelectorAll('.reveal').forEach(elm => {
            isInViewport(elm) ? elm.classList.add('visible') : elm.classList.remove('visible')
        })

    }

    document.addEventListener('scroll', applyScrollEffects)
    
    const inScreenEffects = () => {

         const isInViewport = el => {
             const rect = el.getBoundingClientRect()
             const vertInView = (rect.top <= window.innerHeight) && ((rect.top + rect.height) >= 0)
             const horInView = (rect.left <= window.innerWidth) && ((rect.left + rect.width) >= 0)
             return (vertInView && horInView)
         }
        
         document.querySelectorAll('.show').forEach(elm => {
             isInViewport(elm) ? elm.classList.add('visible') : elm.classList.remove('visible')
         })

    }

    document.addEventListener('DOMContentLoaded', inScreenEffects)

    
})();