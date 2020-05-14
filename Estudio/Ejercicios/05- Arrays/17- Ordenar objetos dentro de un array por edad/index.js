/*
Escribir una función que, dado un array de objetos y una propiedad, ordene los objetos del array
en base a esa propiedad.*/

let list = [
    { name: 'Vanesa', age: 31 },
    { name: 'Alba', age: 32 },
    { name: 'Sergio', age: 31 },
    { name: 'Pepe', age: 19 },
    { name: 'Jose', age: 27 },
    { name: 'Luisa', age: 24 }
];

// function filterByAge(person = {}) {
//     list.sort(function compare(first, second) {
//         debugger; 
//     if (first < second) {
//         return -1;
//     }

//     if (first > second) {
//         return 1;
//     }

//     if (first === second) {
//         return 0;
//     }
// })
// return person.age; 
// }

function sortByAge(objectA, objectB) {
    if(objectA.age < objectB.age){
        return -1;
    }
    if(objectA.age > objectB.age){
        return 1;
    }
    if(objectA.age === objectB.age) {
        if(objectA.name < objectB.name){
            return -1;
        } else {
            return 1; 
        }
        return 0; 
    }
}
list.sort(sortByAge)
