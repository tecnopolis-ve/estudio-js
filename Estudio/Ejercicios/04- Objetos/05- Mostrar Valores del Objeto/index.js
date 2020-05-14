//Escribir una funcion que muestre los valores de las propiedades de un objeto. 

function displayValue(obj) {
    for (let propertyName in obj) {
        console.log(obj[propertyName]); 
    }
}