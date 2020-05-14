/*Dado un número, introducido por el usuario, mostrar todos los números pares
e impares comprendidos entre 0 y el número introducido.*/

let input = parseInt(window.prompt('introduce un número')); 

for ( number = 0; number < input; number++) {
    if (number % 2 === 0) {
        console.log(`${number} es Par`);
    } else {
        console.log(`${number} es Impar`); 
    }
}