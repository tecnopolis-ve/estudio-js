// escribir una funcion que devuelva los valores que son impares

function isOdd (number) {
    return number % 2 !== 0; 
};

function filterOdd(list) {
    return list.filter(isOdd); 
}