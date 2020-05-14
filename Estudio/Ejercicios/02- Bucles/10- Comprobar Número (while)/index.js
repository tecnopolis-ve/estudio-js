// let number = parseInt(window.prompt('introduce un número')); 
// // let isNumber = !isNaN(number);
// while (isNaN(number)) {
//     number = parseInt(window.prompt('introduce un número'));
// }

// // console.log(isNumber); 

let number;

do {
    number = parseInt(window.prompt('introduce un número'));
} while (isNaN(number)) {
    console.log(number);
}