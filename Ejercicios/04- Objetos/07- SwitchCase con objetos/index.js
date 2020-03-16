//replicar switch con objetos

/*Dado un lenguaje de programación, introducido por el usuario, mostrar el sistema de tipos utilizado
por el lenguaje. Mostrar el texto `No se reconoce el lenguaje de programación introducido`, si el
lenguaje introducido no se encuentra en el siguiente listado:

- `C`, mostrar `Sistema de tipos fuerte y estático`
- `C++`, mostrar `Sistema de tipos fuerte y estático`
- `Python`, mostrar `Sistema de tipos fuerte y dinámico`
- `Ruby`, mostrar `Sistema de tipos fuerte y dinámico`
- `JavaScript`, mostrar `Sistema de tipos débil y dinámico`
*/

//En este caso sólo estoy pintando todas las propiedades y valores del objeto. Fataría mostrar el valor del objeto según el tipo de lenguaje introducido por el usuario

let lenguage = {
    C:'Sistema de tipos fuerte y estático',
    'C++':'Sistema de tipos fuerte y estático', 
    Python: 'Sistema de tipos fuerte y dinámico',
    Ruby: 'Sistema de tipos fuerte y dinámico',
    JavaScript: 'Sistema de tipos débil y dinámico', 
    default: 'No se reconoce el lenguaje de programación introducido'
}; 

function displayLenguage(lenguage) {
    for (let property in lenguage) {
        console.log(`${property}: ${lenguage[property]}`); 
    }
}

displayLenguage(lenguage); 

// Ahora un función para el se muestre el valor según el lenguaje introducido. Aquí el parámetro de la función es la propiedad, no el objeto. 

function switchCase(lenguage) {
    let lenguages = {
    C:'Sistema de tipos fuerte y estático',
    'C++':'Sistema de tipos fuerte y estático', 
    Python: 'Sistema de tipos fuerte y dinámico',
    Ruby: 'Sistema de tipos fuerte y dinámico',
    JavaScript: 'Sistema de tipos débil y dinámico', 
    default: 'No se reconoce el lenguaje de programación introducido'
    };

    return lenguages[lenguage] || lenguages.default; 
}
