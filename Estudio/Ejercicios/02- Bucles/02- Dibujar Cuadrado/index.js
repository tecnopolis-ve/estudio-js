/*Dada la base de un cuadrado, introducida por el usuario, mostrar el polígono representado con el
caracter `*`.*/

let base = window.prompt('Cuál es la base del cuadrado'); 
let output = ''; 

for (rows = 0; rows < base; rows++){
    for (columns = 0; columns < base; columns++) {
        output += '*'; 
    }
    output += '\n'; 
}
console.log(output); 