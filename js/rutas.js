
        var animacion;
        function rotarCamara(timestamp) {

            rotacion =timestamp /100 ==360 ?0 : timestamp /100;
            map.rotateTo(rotacion, { duration: 0 });

            animacion = requestAnimationFrame(rotarCamara);
        }


        function finalRotarCamara() {

            cancelAnimationFrame(animacion);
        }   


function addRutas() {

    var url = 'datos/rutas.geojson';
    map.addSource('rutas', 
    { type: 'geojson', 
    data: url});

         map.addLayer({
    'id': 'route',
    'type': 'line',
    'source': 'rutas',
    'layout': {
    'line-join': 'round',
    'line-cap': 'round'
    },
    'paint': {
    'line-color': '#00ff00',
    'line-width': 3
    }
    });

    }

    function zoomToRutas(valores) {

        var coord = valores.split("/");
        console.info(coord);
        map.flyTo({
                center: [coord[2], coord[1]],
                zoom: coord[0]
            });
    
        } //fin funcion
    
    //fin funcion