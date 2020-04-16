// var Unsplash = require('./unsplash.min.js');

// var unsplash = {
//     accessKey: "IbxiLlW8y0lgxnYUU6MH1XqL-vfYmz88d3RUX4Hc6P0",
//     secret: "M1qBAvHthxMHxbjQsamxUeuPDkpMqF39721QUMK9kmU",
//     callbackUrl: "{CALLBACK_URL}"
//   };

//Una función que cada vez que haga click en el botón 'Me gusta' de la imagen, muestre un mensaje con estilo de personalidad y que enlace con otras imágenes acerca de posibles actividades que pudieran gustarle a la persona

let imgButton1 = document.querySelector('#like-beach'); 
let imgButton2 = document.querySelector('#like-desert');
let imgButton3 = document.querySelector('#like-woods');
// let imgUrl1 = document.querySelector('#museum');
// let imgUrl2 = document.querySelector('#home');
// let imgUrl3 = document.querySelector('#travel');

// let age = parseInt(window.prompt('¿Qué edad tienes?'));

let images = {
    imgName: ['beach', 'desert', 'woods'],
    imgButton: [imgButton1, imgButton2, imgButton3],
    // personality: ['type A', 'type B', 'type C', 'type D'],
    // activities: ['go to the beach', 'go to the museum', 'stay home']
}; 

// img1.addEventListener('click', function(event){
//     console.log(result.personality[1]); 
//     console.log('You\'re a beach kind of person'); 
// })

// let {imgButton} = images;

// console.log(imgButton); 

// function selectImg(img) {
//     images.imgButton.addEventListener('click', function(event){
//         return images.personality[1]; 
//     })
// }

// function selectImg() {
    
// }

// selectImg(); 

// function yourActivities(){
//     imgButton.forEach(function(element){
//         element.addEventListener('click', function(){
//         })
//     })  
//     return images.imgURL;   
// }

// yourActivities(); 



/*Este div es para mostrar el mensaje con el análisis del tipo de personalidad. https://api.unsplash.com/photos
Si la persona escoje un tipo de imagen, entonces se tiene que pintar este elemento. */

/*Crear un funcion cuyos paramettros seas el elemento padre y el botón para crear el elemento 'mensaje' cada vez que se le de click CREAR UN CONSTRUCTOR*/

/*agregar una clase que centre el elemento cada vez que se le e click */


const firstOption = imgButton1.addEventListener('click', function(event){

    let parentElm = document.querySelector('#museum');
    let childPElm = document.createElement('p');

    childPElm.classList.add('bg-blue-100', 'border-t', 'border-b', 'border-blue-500', 'text-blue-700', 'px-4', 'py-3', 'role="alert"');
    childPElm.getAttribute('href', '#');
    childPElm.appendChild(document.createTextNode('Si te gustan las playas, aquí podrás mirar más de distintas partes del mundo '));

    parentElm.appendChild(childPElm); 
    imgButton2.disabled = true; 
    imgButton3.disabled = true; 

    let childAnchorElm = document.createElement('a');

    childAnchorElm.appendChild(document.createTextNode('aquí'));
    childAnchorElm.getAttribute('href', '#');
    childAnchorElm.classList.add('text-green-800', 'font-bold', 'italic');

    childPElm.append(childAnchorElm); 

let clientId = "IbxiLlW8y0lgxnYUU6MH1XqL-vfYmz88d3RUX4Hc6P0"; 
let query =  document.querySelector('a').value;
let url = `https://api.unsplash.com/search/photos/?client_id=${clientId}&query=${query}`;

fetch(url)
.then((response) => {
    let data = response.json();
    return data;
})
.then((data) => {

    data.results.forEach((photo) => {
        let result = photo.urls.regular;
        childAnchorElm.append(result);
    })

});   

const secondOption = imgButton2.addEventListener('click', function(event){

    let parentElm = document.querySelector('#home');
    let childElm = document.createElement('p');
    childElm.classList.add('bg-blue-100', 'border-t', 'border-b', 'border-blue-500', 'text-blue-700', 'px-4', 'py-3', 'role="alert"');
    childElm.getAttribute('href', '#');
    childElm.appendChild(document.createTextNode('Prefieres la calma, quizás consigas tranquilidad apartándote de las multitudes. Si quieres conocer más desiertos, echa un vistazo aquí'));
    parentElm.appendChild(childElm); 
    imgButton1.disabled = true; 
    imgButton3.disabled = true; 
});

const thirdOption = imgButton3.addEventListener('click', function(event){

    let parentElm = document.querySelector('#beach');
    let childElm = document.createElement('p');
    childElm.classList.add('bg-blue-100', 'border-t', 'border-b', 'border-blue-500', 'text-blue-700', 'px-4', 'py-3', 'role="alert"');
    childElm.getAttribute('href', '#');
    childElm.appendChild(document.createTextNode('Tener contacto con lo verde y la frescura de los árboles. Quizás prefieras el senderismo o ir a la montaña para respirar lejos de la cuidad. Aquí más bosques del mundo para ti. '));
    parentElm.appendChild(childElm); 
    imgButton1.disabled = true; 
    imgButton2.disabled = true; 
});
});
   
    








