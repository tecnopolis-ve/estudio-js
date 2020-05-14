/* Dado el radio de una esfera, introducido por el usuario, calcular el volumen de la esfera. La
fórmula para calcular el volumen de una esfera es cuatro tercios multiplicado por `π` (3.14)
multiplicado por el radio al cubo:

> a = 4/3 π * r³ */

let radio = parseInt(window.prompt('Introduce el valor del radio')); 
let volumenEsfera = (4/3) * 3.14 * Math.pow(radio, 3); 

window.alert(volumenEsfera); 