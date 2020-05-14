/* Dada la base y la altura de un cuadrilátero, ambos datos introducidos por el usuario, mostrar el
polígono representado con el caracter `*`.
*/

let base = parseInt(window.prompt('introduce la base'));
let height = parseInt(window.prompt('introduce la altura')); 
let output = ''; 

for (rows = 0; rows < height; rows++){
    for (columns = 0; columns < base; columns++) {
        if (rows === 0 || rows === height - 1) {
            output += '*';
        } else {
            if(columns == 0 || columns == base - 1){
                output += '*';
            }else{
                output += ' ';
            }
        }
    }
    output += '\n'; 
}

console.log(output);