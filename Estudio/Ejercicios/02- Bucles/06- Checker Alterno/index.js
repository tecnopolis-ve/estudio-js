/* Dada la base y la altura de un cuadrilátero, ambas introducidas por el usuario, mostrar el polígono
representado con el caracter `#` dejando un espacio entre columnas. Las filas pares deben empezar
con `#` y las impares con un espacio.

Ejemplo para un cuadrilátero de base 3:

```javascript
/**
 *   # # #
 *    # #
 *   # # #
 */

let base = parseInt(window.prompt('introduce la base'));
let height = parseInt(window.prompt('introduce la altura'));
let output = ''; 
let maxCharacter = 0; 


for (rows = 0; rows < height; rows++){
    for (columns = 0; columns < base; columns++){
        if (rows%2 === 0) {
            if (columns%2 === 0) {
                maxCharacter = columns; 
                output += '#'; 
            } else {
                output += ' '; 
            } 
        } else {
                if (columns%2 === 1 && columns < maxCharacter){
                    output += '#';
                } else {
                    output += ' '; 
                }

            }
        }
        output += '\n';
    }
     

    
console.log(output); 