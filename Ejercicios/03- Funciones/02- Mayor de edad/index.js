/**
 * una función que muestre si eres mayor de edad
 */

 function mayorDeEdad (edad) {
    return edad >= 18; 
 }
 mayorDeEdad(10); 

 function mayorDeEdad (edad, mayoriaEdad) {
     mayoriaEdad = mayoriaEdad || 18; 
     return edad >= mayoriaEdad; 
 }

 function mayorDeEdad (edad, mayoriaEdad = 18) {
     return edad >= mayoriaEdad; 
 }