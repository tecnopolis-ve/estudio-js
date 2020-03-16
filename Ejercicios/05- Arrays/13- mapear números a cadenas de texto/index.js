//escribir una funcion que dado un array de números, mapee los elementos y devuelva un nuevi array con un texto. El texto debe ser el valor del número y un texto que describa si es par o impar

let list = [1, 4, 6];
let expected = [
    '1:impar',
    '4:par',
    '6:par'
];

function numAndText(number) {
    if (number % 2 === 0) {
        return `${number}:par`;
    } else {
        return `${number}:impar`; 
    }
}

list.map(numAndText); 