//Escribir una función que muestre los valores y nombres de las propiedades de un objeto.


function displayPropsAndValues(prop, value) {
    for (let property in obj) {
        console.log(`${property}: ${obj[property]}`);
    }
}