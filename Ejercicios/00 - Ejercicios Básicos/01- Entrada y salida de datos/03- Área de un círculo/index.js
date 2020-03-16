/*Dado el radio de un círculo, introducido por el usuario, calcular el área de la circunferencia. La
fórmula para calcular el área de un círculo es `π` (3.14) multiplicado por el radio al cuadrado:

> a = π * r²
*/

let radio = parseInt(window.prompt('Introduce el valor del radio'));
let areaCirculo = 3.14 * Math.pow(radio, 2);

window.alert(areaCirculo); 