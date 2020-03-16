//Escribir una función que muestre los nombres de las propiedades de un objeto. 

function displayProps(obj) {
    for (let property in obj) {
        console.log(property); 
    }
}

//Escribir valores de las propiedades

function displayValues (obj) {
    for (let property in obj) {
        console.log(obj[property]);
    }
    
}