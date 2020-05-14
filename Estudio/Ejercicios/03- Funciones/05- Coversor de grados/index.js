/*Crear una función que reciba una temperatura especificada en grados (Fahrenheit o Celsius) y los
convierta a su unidad opuesta. Si introducimos como parámetro `f` convertirá los grados introducidos
a grados Celsius (Cº) y si se introduce `c` los convertirá a grados Fahrenheit (Fº).
*/


function celsiusToFahrenheit (celsius) {
    return (celsius * 1.8) + 32; 
}
function fahrenheitToCelsius (fahrenheit) {
    return (fahrenheit - 32) / 1.8; 
}

function degrees (number, target) {
    if (target === 'c'){
        return celsiusToFahrenheit(number);
    } else if (target === 'f'){
        return fahrenheitToCelsius(number); 
    } else {
        return NaN; 
}
}

// function degrees (number == 0, target == 'c') {
//     if (target === 'c'){
//         return celsiusToFahrenheit(number);
//     } else if (target === 'f'){
//         return fahrenheitToCelsius(number); 
//     } 
// }