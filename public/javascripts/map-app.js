window.onload= () => {

    let map 

    const markers = []

    let infoWindow

    initMap() 

    function initMap() {


        axios.get('/api/places')
            .then(response => drawMap(response.data))
            .catch(err => next(err))

    }

    function drawMap(places) {

        map = new google.maps.Map(document.querySelector('#map'), {
            center: {
                lat: 0,
                lng: 0
            },
            zoom: 15
        })
        
        infoWindow = new google.maps.InfoWindow()

        places.forEach(elm => {
           
            // let request = {
            //     query: elm.name,
            //     fields: ['place_id']
            // }

            // let service = new.google.maps.places.PlacesService(map)

            // service.findPlaceFromQuery(request, callback)

            // function callback(results, status) {
            //     if (status == google.maps.places.PlacesServiceStatus.OK) {
            //         for (var i = 0; i < results.length; i++) {
            //             createMarker(results[i]);
            //         }
            //     }
            // }

            let center = {
                lat: elm.location.coordinates[0],
                lng: elm.location.coordinates[1]
            }

            let pin = new google.maps.Marker({
                map,
                position: center,
                title: elm.name
            })

            markers.push(pin)
        
        })

        map.setCenter({
            lat: places[0].location.coordinates[0],
            lng: places[0].location.coordinates[1]
        })
    }
    
}


    
