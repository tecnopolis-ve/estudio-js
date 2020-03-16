/* Dada una temperatura, especificada en grados Celsius (Cº), mostrar el resultado de convertir el
valor introducido a grados Fahrenheit. Fórmula para la conversión:

> F° = (C° * 1.8) + 32
*/

let celsius = parseInt(window.prompt('¿Cuál es la temperatura?'));
let fahrenheit = (celsius * 1.8) + 32; 

window.alert(fahrenheit); 