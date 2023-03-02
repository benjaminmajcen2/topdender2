mapboxgl.accessToken = 'pk.eyJ1IjoiYmVuY2hzcG90dGVycyIsImEiOiJjbGJrdnAycXQwMW1rM25waXF1dHQ4djRhIn0.k00FDSeJrdDFoV_tMw7tLQ';
    const map = new mapboxgl.Map({
        container: 'map',
        // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
        style: 'mapbox://styles/benchspotters/cle72xxgb005f01qmw4mixn6i',
        center: [3.981514,50.880059],
        zoom: 9.1
    });

    map.on('load', () => {
        map.addSource('places', {
            'type': 'geojson',
            'data': {
                'type': 'FeatureCollection',
                'features': [
                    {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Ruimte voor water: Ontharding Den Bleek (Geraardsbergen)</strong><p>Begin 2019 sloot het openluchtzwembad Den Bleek de deuren. Sindsdien werkt een geëngageerde groep van bewoners, verenigingen en comités aan een nieuwe invulling. Wat vaststaat: de natuur staat centraal.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [3.8799700, 50.7681807]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Ruimte voor water: Landschapspark Burchtdam (Ninove)</strong><p>De Burchtdamsite is een braakliggend watergevoelig gebied. Om in te spelen op de wijzigende klimaatomstandigheden (opwarming, overstromingen) vormt stad Ninove deze site om tot een waterpositief landschapspark.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [4.029930792,50.830505807]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Ruimte voor water: Planologische ruil (Geraardsbergen)</strong><p>Opzetten van een project planologische ruil voor onbebouwde overstromingsgevoelige percelen in Majoor Van Lierdelaan in relatie tot kernversterking stad Geraardsbergen.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [3.867483753,50.760199904]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Groenblauwe Denderflanken: Klimaatadaptieve pleinen (Geraardsbergen)</strong><p>Een grootschalige aanpak om de flankdorpen Moerbeke en Viane klimaatrobuust te maken.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [3.921786303,50.757458663]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Groenblauwe Denderflanken: Ontharding Kapelleweide (Roosdaal)</strong><p>Het project ‘Kapelleweide’ van de gemeente Roosdaal bestaat uit het ontharden van de schoolomgeving rond de basisschool Immaculata Maria-Instituut, net als de speelplaats zelf. Het doel is om een groot aantal parkeerplaatsen voor de kerk te schrappen.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [4.084333161,50.84316595]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Groenblauwe Denderflanken: Waterbufferbos Ten Bos (Aalst)</strong><p>De sponswerking van het gebied wordt verhoogd via klimaatbestendige bosuitbreiding met waterbufferingsmaatregelen.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [4.089265976,50.910538439]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Groenblauwe Denderflanken: Sponslandschap Gasthuisstraat (Roosdaal)</strong><p>Met het project ‘Sponslandschap Gasthuisstraat’ wenst de gemeente Roosdaal de omgeving van de Gasthuisstraat een groenblauwe inrichting te geven en het landschappelijk karakter te bewaren.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [4.068940287,50.838300530]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Groenblauwe Denderflanken: Wolfsgracht (Denderleeuw)</strong><p>Met Wolfsgracht wenst de gemeente Denderleeuw een voorbeeldstellend project te realiseren als alternatief voor de klassieke verkaveling en zo de bouwshift omzetten in de praktijk.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [4.067888324,50.879708031]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Groenblauwe Denderflanken: Waterbufferlandschap bovenloop Hollebeek (Geraardsbergen)</strong><p>Ingrepen ter bevordering van de sponswerking van de Hollebeekvallei zodat de snelle afvoer wordt gereduceerd en de verdroging van de natuur- en landbouwgebieden wordt weggewerkt.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [3.9071194,50.7671923]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Groenblauwe Denderflanken: Waterskatepark Sportsite (Liedekerke)</strong><p>In dit project wordt een waterskatepark aangelegd, inclusief waterbekken, waterspeeltuin en speelbos en voorzieningen voor waterhergebruik voor het besproeien van sportvelden.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [4.078454140,50.864747837]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Groenblauwe Denderflanken: Klimaatstraat Rerum Novarum (Aalst)</strong><p>Binnen het ruimere strategische kader van de Groenpool Aalst wil de stad de breed gedimensioneerde Rerum Novarumstraat ontharden en i.f.v. aanpak droogte en hitte herinrichten als multifunctionele klimaatstraat.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [4.070314567,50.928324937]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Groenblauwe Denderflanken: Klimaatstraat Kapelleweide (Roosdaal)</strong><p>Via inrichting van een klimaatstraat bouwt Roosdaal aan een praktijk van (her)inrichting van de publieke ruimte waarbij water een vanzelfsprekend onderdeel wordt.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [4.085302955,50.842622225]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Groenblauwe Denderflanken: Klimaatstraat Sportlaan (Liedekerke)</strong><p>Transformatie van de Sportlaan tot klimaatstraat, met ruimte voor gravitaire afwatering en lokale infiltratie, biodivers groen en ontmoetingsruimte: reduceren van het aantal rijstroken in de Sportlaan tot één rijstrook.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [4.076168638,50.865338589]
                        }
                    }
                ]
            }
        });
        // Add a layer showing the places.
        map.addLayer({
            'id': 'places',
            'type': 'circle',
            'source': 'places',
            'paint': {
                'circle-opacity': 0,
                'circle-stroke-width': 0,
                'circle-stroke-color': '#4f3d5a'
            }
        });

        // Create a popup, but don't add it to the map yet.
        const popup = new mapboxgl.Popup({
            closeButton: true,
            closeOnClick: true
        });

        map.on('click', 'places', (e) => {
            // Change the cursor style as a UI indicator.
            map.getCanvas().style.cursor = 'pointer';

            // Copy coordinates array.
            const coordinates = e.features[0].geometry.coordinates.slice();
            const description = e.features[0].properties.description;

            // Ensure that if the map is zoomed out such that multiple
            // copies of the feature are visible, the popup appears
            // over the copy being pointed to.
            while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
            }

            // Populate the popup and set its coordinates
            // based on the feature found.
            popup.setLngLat(coordinates).setHTML(description).addTo(map);
        });

    });

// Center the map on the coordinates of any clicked circle from the 'circle' layer.
map.on('click', 'places', (e) => {
map.flyTo({
center: e.features[0].geometry.coordinates, zoom:15, pitch: 40
});
});

map.addControl(new mapboxgl.FullscreenControl());

map.addControl(new mapboxgl.NavigationControl());