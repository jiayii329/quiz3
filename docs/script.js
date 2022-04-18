window.onload = () => { //open index.html, then start staticLoadPlaces
     let places = staticLoadPlaces();//It means will run the places
     renderPlaces(places);//Load the plsces in the renderPlaces 
};

function staticLoadPlaces() {//when load windows onload, first will run the staticLoadPlaces 
    return [
        {
            name: 'MyModel',
            location: {
                lat: <your-latitude>,
                lng: <your-longitude>,
            }//load our latitude and longtitude here
        },
    ];
}

function renderPlaces(places) {
    let scene = document.querySelector('a-scene');//Will create a object named scene,also find the a-scene in another document

    places.forEach((place) => {
        let latitude = place.location.lat; //copy place.location.lat to latitude
        let longitude = place.location.lng; //copy place.location.lng to longtitude

        let model = document.createElement('a-entity'); //a model object created,then the object will create a a-entity label 
        model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
        model.setAttribute('gltf-model', './assets/MyModel/scene.gltf');
        model.setAttribute('rotation', '0 90 0');
        model.setAttribute('animation-mixer', '');
        model.setAttribute('scale', '0.3 0.3 0.3');
        //set attribute

        model.addEventListener('loaded', () => {
            window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
        }); //load gps-entity-place-loaded into addEventListener

        scene.appendChild(model);
    });
}