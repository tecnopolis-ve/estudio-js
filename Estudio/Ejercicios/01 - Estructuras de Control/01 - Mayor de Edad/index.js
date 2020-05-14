//Dado un número (edad), introducido por el usuario, comprobar si es mayor de edad.

const LEGAL_AGE = 18;
let age = window.prompt('Introduce tu edad'); 

let sucessMessage = 'Eres mayor de edad';
let errorMessage = 'Eres menor de edad'; 

if (age >= LEGAL_AGE) {
    window.alert(sucessMessage); 
} else {
    window.alert(errorMessage); 
}