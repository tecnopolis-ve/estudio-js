//Dado un número, introducido por el usuario, mostrar la tabla de multiplicar de dicho número.

let number = parseInt(window.prompt('introduce un número')); 

for  (i = 0; i < number; i++) {
 let operacion = number * i;
 debugger   
    console.log(`${i} x ${number} = ${operacion}`); 
}