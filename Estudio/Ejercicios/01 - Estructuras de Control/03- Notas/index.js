/*Dado un número (nota), introducido por el usuario, mostrar un texto asociado a su valor:

- Si la nota está entre 0 y 4 mostramos `Suspenso`
- Si la nota es 5 mostramos `Suficiente`
- Si la nota es 6 mostramos `Bien`
- Si la nota está entre 7 y 8 mostramos `Notable`
- Si la nota está entre 9 y 10 mostramos `Sobresaliente`
- Para cualquier otro caso mostamos `No sé evaluar tu nota`
*/

let nota = parseInt(window.prompt('Introduce tu nota'));

switch (nota) {
    case 0 :
    case 1 :
    case 2 :
    case 3 :
    case 4 :
        console.log('Suspenso');
    break;
    case 5 : 
        console.log('Suficiente');
    break;
    case 6 : 
        console.log('Bien');
    break;
    case 7 :
    case 8 :
        console.log('Notable');
    break;
    case 9 :
    case 10 : 
        console.log('Sobresaliente');
    default :
        console.log('No sé evaluar tu nota'); 
}