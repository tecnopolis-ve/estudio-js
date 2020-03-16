/*Dado un número (edad), introducido por el usuario, comprobar si su edad está comprendida en una de
las siguientes categorías:

- Si tiene entre 0 y 3 años, lo consideramos un `bebé`
- Si tiene entre 4 y 12 años, lo consideramos `infantil`
- Si tiene entre 13 y 17 años, lo consideramos `adolescente`
- Si tiene entre 18 y 30 años, lo consideramos `joven adulto`
- Si tiene entre 31 y 65 años, lo consideramos `adulto contemporáneo`
- Si tiene más de 65 años, lo consideramos `jubilado`
*/

const MIN_BEBE = 0;
const MIN_INFANTIL = 4;
const MIN_ADOLESCENTE = 13;
const MIN_JOVEN_ADULTO = 18;
const MIN_ADULTO_CONTEMPORANEO = 31;
const MIN_JUBILADO = 65;

let age = window.prompt('¿Qué edad tienes?');

if (age >= MIN_BEBE && age <= MIN_INFANTIL) {
    console.log('Eres un bebé');
} else if (age >= MIN_INFANTIL && age <= MIN_ADOLESCENTE) {
    console.log('Eres un niño');
} else if (age >= MIN_ADOLESCENTE && age <= MIN_JOVEN_ADULTO) {
    console.log('Eres un adolescente');
} else if (age >= MIN_JOVEN_ADULTO && age <= MIN_ADULTO_CONTEMPORANEO) {
    console.log('Eres un joven adulto');
} else if (age >= MIN_ADULTO_CONTEMPORANEO && age <= MIN_JUBILADO) {
    console.log('Eres un adulto contemporáneo'); 
} else {
    console.log('Deberías estar jubilado'); 
}
