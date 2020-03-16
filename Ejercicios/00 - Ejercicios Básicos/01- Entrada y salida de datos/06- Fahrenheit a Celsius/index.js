/* Dada una temperatura, especificada en grados Fahrenheit (Fº), mostrar el resultado de convertir el
valor introducido a grados Celsius. Fórmula para la conversión:

> Cº = (F° − 32) ÷ 1.8
*/

let fahrenheit = parseInt(window.prompt('¿Cuál es la temperatura'));
let celsius = (fahrenheit - 32) / 1.8;

window.alert(celsius); 