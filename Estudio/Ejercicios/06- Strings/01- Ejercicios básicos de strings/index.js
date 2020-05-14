//escribir una funcion que Dado un número (cantidad)y devuelva una lista (array) con tantos números aleatorios como la cantidad introducida

// function randomize(quantity = 0, min = 0, max = 1) {
//     let list = [];

//     for (let i = 0; i < quantity; i++) {
//         list.push(Math.random()*max);
//     }
//     return list;
// }

// randomize(5, 10); 


//Escribir una función que reciba una cantidad, un valor mínimo y un valor máximo y devuleva un array con tantos numeros aleatorios(comprendidos entre el número y el máximo) como la cantidad introducida. 

// function randomize(quantity = 0, min = 0, max = 1) {
//     return list.from({list: quantity}, function()) {
//         return Math.round(Math.random() * (max - min) + min); 
//     }
// }

function randomize(quantity = 0, min = 0, max = 1) {
    return Array.from({list: quantity}, function() {
        return (Math.random() * (max - min) + min).toPrecision(3); 
    })
}