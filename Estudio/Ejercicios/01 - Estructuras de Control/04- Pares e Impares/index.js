//Dado un número, introducido por el usuario, mostrar si el número seleccionado es par o impar.

let number = parseInt(window.prompt('Introduce un número'));
let isEven = number % 2 === 0;

if (isEven) {
    console.log('Este es un número par');
} else {
    console.log('Este es un número impar'); 
}

let isEvenMessage = 'Este es un número par';
let isOddMessage = 'Este es un número impar';

let output = isEven ? isEvenMessage : isOddMessage; 
