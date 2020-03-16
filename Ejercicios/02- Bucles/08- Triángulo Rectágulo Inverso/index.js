/*Dada la altura de un triángulo rectángulo, introducida por el usuario, mostrar el
polígono representado con el caracter `*`.

Ejemplo para un cuadrilátero de base 4:

```javascript
/**
 *      *
 *     **
 *    ***
 *   ****
 */

let height = parseInt(window.prompt('introduzca la altura')); 
let output = ''; 

for (rows = 0; rows < height; rows++) {
    let asteriskToPrint = rows + 1;
    for (columns = 0; columns < height; columns++) {
        let characterToPrint = columns >= height - asteriskToPrint
        ? '*'
        : ' ';
        
        output += characterToPrint; 
    }
    output += '\n'; 
}
console.log(output); 