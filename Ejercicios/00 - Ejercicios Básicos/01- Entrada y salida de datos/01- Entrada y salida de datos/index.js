/* Dados dos números introducidos por el usuario, sumar ambos y mostrar el resultado de la operación.*/

let first = window.prompt('Introduce el primer número'); 
let second = window.prompt('Introduce el segundo número');

let result = parseInt(first) + parseInt(second);

let output = `El resultado de tu suma es: ${result}`

window.alert(output); 