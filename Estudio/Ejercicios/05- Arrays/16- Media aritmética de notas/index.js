//calcular meda aritmetica de las notas utilizando el método reduce

let marks = [3, 6, 7, 8, 10, 0];
let expected = 5.66; 

function average(list = []) {
    list.reduce(function(acumulator, currentValue) {
        let sum = acumulator + currentValue; 
        return sum/list.length; 
    }, 0);
}
