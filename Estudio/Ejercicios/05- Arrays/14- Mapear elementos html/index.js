//Escribir una función que dado un array de elementos, mapee los elementos y devuelva un nuveo array con etiquetas 'p'. El texto debe ser el valor del elemento. 

let list = ['Pepe', 'Luis', 'Jose'];
let expected = [
    '<p>Pepe</p>',
    '<p>Luis</p>',
    '<p>Jose</p>',
]; 

function mapHtml(element) {
    return console.log(`<p>${element}</p>`);
}

console.log(list.map(mapHtml).join(' ')); 

