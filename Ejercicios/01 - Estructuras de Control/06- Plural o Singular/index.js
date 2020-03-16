/*Solicitar al usuario dos palabras (una en singular y otra en plural) y un número. Mostrar al usuario
la opción más indicada para el número introducido.

Ejemplo: dada la palabra en singular `mes` y la palabra en plural `meses`, si el usuario introduce
el número 0, la palabra más adecuada sería meses.
*/

let singular = window.prompt('Introduce una palabra en singular');
let plural = window.prompt('Introduce una palabra en plural'); 
let num = parseInt(window.prompt('Introduce un número'));

if (num === 0 || num > 1) {
    console.log(`Hay ${num} ${plural}`);
} else {
    console.log(`Hay ${num} ${singular}`); 
}