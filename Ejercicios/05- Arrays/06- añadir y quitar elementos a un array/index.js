/*Ejercicio 6, añadir y quitar elementos a un array

Hacer uso de los métodos 'pop', 'push', 'shift', 'unshift'
*/

//Caso 1

// const actual = ['a', 'b', 'c'];
// const expected = ['x', 'a', 'b', 'c', 'd', 'e'];

// actual.push('d', 'e');
// actual.unshift('x'); 

// console.log(actual); 

//Caso 2

// const actual = [5, 6, 7];
// const expected = [1, 2, 3, 5, 6, 7, 9, 10]; 

// actual.push(9, 10);
// actual.unshift(1, 2, 3);

// console.log(actual); 

//Caso 3 

const actual = [5, 6, 7];
const expected = [2, 6, 8]; 

actual.shift(5);
actual.unshift(2);
actual.pop(7);
actual.push(8); 

console.log(actual); 

//Caso 4

const actual = ['e', 'b', 'z', 'b']; 

actual.unshift('t', 'z', 's');
actual.pop('b');
actual.pop('z');
actual.pop('b');  
actual.push('y'); 

console.log(actual);

const expected = ['t', 'z', 's', 'e', 'y']; 

