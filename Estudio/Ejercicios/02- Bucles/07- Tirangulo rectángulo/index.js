//Dada la altura de un triangulo rectangulo, introducida por el usuario, mostrar el polígono representado con el carácter '*'. 

// let height = parseInt(window.prompt('Introduce la altura del triángulo')); 
// let output = ''; 

// for (row = 0; row < height; row++) {
//     let asteriskToPrint = row + 1; 

//     for (let columns = 0; columns < asteriskToPrint; columns++) {
//         output += '*';
//     }
//     output += '\n';
// }
//  console.log(output);
 

let height = parseInt(window.prompt('introduce la altura'));
let output = '';

for (let rows = 0; rows < height; rows++) {
    for (let columns = 0; columns < rows + 1; columns++) {
        output += '*';
    }
    output += '\n'; 
}
console.log(output); 
