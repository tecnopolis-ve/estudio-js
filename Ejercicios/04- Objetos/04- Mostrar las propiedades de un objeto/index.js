//Escribir una función que muestre los nombres de las propiedades de un objeto.

function propsName(obj) {
  for (let propertyName in obj) {
    console.log(propertyName); 
  }
}



// Esta función muestra la cantidad de propiedades que tiene un objeto

// function propsLength(obj) {
//     let count = 0;
//         for (let property in obj) {
//           count++; 
//         } 
//         return count;
// } 