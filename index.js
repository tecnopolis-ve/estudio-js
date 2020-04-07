
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
    personality: ['type A', 'type B', 'type C', 'type D'],
    activities: ['go to the beach', 'go to the museum', 'stay home']
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

/*Este div es para mostrar el mensaje con el análisis del tipo de personalidad. 
Si la persona escoje un tipo de imagen, entonces se tiene que pintar este elemento. */

imgButton1.addEventListener('click', function(event){
    let parentElm = document.querySelector('#museum');
    let childElm = document.createElement('p');
    childElm.classList.add('bg-blue-100', 'border-t', 'border-b', 'border-blue-500', 'text-blue-700', 'px-4', 'py-3', 'role="alert"');
    childElm.getAttribute('href', '#');
    childElm.appendChild(document.createTextNode('Aquí va el mensaje informativo'));
    parentElm.appendChild(childElm); 
})





