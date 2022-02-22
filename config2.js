var config = {
    style: 'mapbox://styles/marfla/ckzvmbpc2009014jy422ep11j',
    accessToken: 'pk.eyJ1IjoibWFyZmxhIiwiYSI6ImNreXEwaHZ3NjBmOHoyb25wNjU4bjNrN3YifQ.d5cSvSsV3hjHa-qkNervBQ',
    showMarkers: true,
    markerColor: '#8bb395',
    theme: 'dark',
    use3dTerrain: false,
    title: 'La región del Adriático del norte',
    subtitle: 'Un viaje por las ciudades del Adriático',
    byline: 'Marjan Flandia',
    footer: 'Viajando',
    chapters: [
        {
            id: 'altoadriatico',
            alignment: 'left',
            hidden: false,
            title: 'El Adriático del norte',
            //  image: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Eyjafjallaj%C3%B6kull_first_crater_20100329.jpg',
            description: 'El mar Adriático (del latín, Mare Hadriaticum) es un golfo estrecho y alargado que forma parte del mar Mediterráneo. Se encuentra situado entre la península Itálica, al oeste, y la península de los Balcanes, al este, con una anchura máxima de unos 200 km, y una longitud de unos 800 km. Su extremo meridional limita con el mar Jónico, del que lo separa el canal de Otranto. Su superficie total es de, aproximadamente, 160 000 km².',
            location: {
                center: [13.09217, 45.50202],
                zoom: 7.50,
                pitch: 0.00,
                bearing: -9.52
                
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]


        },{
            id: 'venezia',
            alignment: 'left',
            hidden: false,
            title: 'Venecia',
            image: 'images/venecia2.jpg',
            description: 'Su centro histórico, declarado Patrimonio de la Humanidad por la Unesco, está situado en un conjunto de islas en la laguna de Venecia, en el norte del mar Adriático. Su particularidad geográfica, así como su milenaria historia y su riquísimo patrimonio monumental y artístico, han hecho de Venecia uno de los destinos turísticos más impactantes y populares del mundo.',
            location: {
                center: [12.32392, 45.44063],
                zoom: 13.24,
                pitch: 45.00,
                bearing: -40.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: [

            ]



        },{
            id: 'miramar',
            alignment: 'right',
            hidden: false,
            title: 'Castillo de Miramar',
            image: 'images/miramare.jpg',
            description: 'El Castillo de Miramar, que se encuentra situado en la costa adyacente a Trieste. Este  hermoso edificio del siglo XIX fue erigida por órdenes del archiduque Maximiliano de Habsburgo archiduque de Austria y emperador de México sobre una tierra de 22 hectáreas. Su objetivo: una residencia para compartir con su esposa Carlota.',
            location: {
                center: [13.71169, 45.70262],
                zoom: 11.99,
                pitch: 60.00,
                bearing: 44.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: [

            ]



        },{
            id: 'Trieste',
            alignment: 'left',
            hidden: false,
            title: 'Trieste',
            image: 'images/trieste2.jpg',
            description: 'En opinión de la escritora de viajes Jan Morris, Trieste “no ofrece ningún monumento inolvidable, ninguna melodía universalmente familiar ni una gastronomía inconfundible”, y sin embargo cautiva a muchos viajeros.',
            location: {
                center: [13.76676, 45.64088],
                zoom: 11.97,
                pitch: 60.00,
                bearing: 98.44
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: [

            ]



        },{
            id: 'Capodistria',
            alignment: 'left',
            hidden: false,
            title: 'Koper Capodistria',
            image: 'images/koper.jpg',
            description: 'Pequeño asentamiento en una isla del golfo de Trieste. En la antigua Grecia el lugar era conocido como Aegida y los romanos lo llamaron Capris, Caprea, Capre o Caprista, es decir, isla de las cabras. En 1279 Koper pasó a formar parte de la República de Venecia.La ciudad se convirtió en el centro administrativo de Istria y era llamada por los venecianos Caput Histriae, la capital de Istria. De ahí proviene su nombre italiano actual, Capodistria.',
            location: {
                center: [13.73126, 45.54749],
                zoom: 12.00,
                pitch: 60.00,
                bearing: 97.08
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: [

            ]



        },{
            id: 'Isola',
            alignment: 'left',
            hidden: false,
            title: 'Isola d Istria',
            image: 'images/isola.jpg',
            description: 'Originalmente era una isla al norte del Adriático (el nombre proviene del italiano "isla"), fue colonizada primero por los romanos, quien construyeron el puerto Haliaetum al suroeste de la ciudad. Durante la Edad Media, estuvo controlada por la República de Venecia.',
            location: {
                center: [13.66289, 45.53895],
                zoom: 12.00,
                pitch: 59.00,
                bearing: 109.60
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: [

            ]


        },{
            id: 'Pirano',
            alignment: 'left',
            hidden: false,
            title: 'Piran Pirano',
            image: '',
            
            description: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Rqx2z0YXwro?controls=0" title="Pirano" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> El nombre Pirán deriva del griego pyr (fuego) en referencia a las hogueras del antiguo faro que se levantó en la costa de la ciudad. Pirán se menciona por primera vez por Anónimo de Rávena en su libro “Cosmographia” en el siglo VII.  La colonización y la romanización de la región empezaron con la conquista romana de Istria entre los años 178 y 177.',
            location: {
                center: [13.56791, 45.52924],
                zoom: 11.95,
                pitch: 60.00,
                bearing: 105.67
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: [

            ]



        },{
            id: 'Rovigno',
            alignment: 'right',
            hidden: false,
            title: 'Rovinj Rovigno',
            //image: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Cr%C3%A1ter_del_Vesubio.jpg',
            description: '<iframe width="560" height="315" src="https://www.youtube.com/embed/-M8bfkTVSPg?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> Se encuentra sobre la costa oeste de la península de Istria y es un destino turístico destacado, con varias islas cercanas y un activo puerto pesquero. Allí algunos residentes todavía hablan istriano o rovignese, una lengua romance antiguamente muy difundida en esta zona de Istria.',
            location: {
                center: [13.64422, 45.08050],
                zoom: 12.00,
                pitch: 54.50,
                bearing: 40.80
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: [

            ]





        }
    ]
};
