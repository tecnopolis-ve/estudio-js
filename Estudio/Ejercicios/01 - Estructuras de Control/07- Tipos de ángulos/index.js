/* Dado un número (grados), introducido por el usuario, mostrar el tipo de ángulo asociado teniendo en
cuenta la siguiente clasificación:

- Ángulo agudo: un ángulo agudo tiene entre 0 y 90 grados.
- Ángulo recto: un ángulo recto tiene exactamente 90 grados.
- Ángulo obtuso: un ángulo obtuso tiene entre 90 y 180 grados.
- Ángulo llano: un ángulo recto tiene exactamente 180 grados.
*/

let grados = parseInt(window.prompt('Introduce un número en grados'));

if (grados >= 0 && grados <= 89) {
    console.log('Es un águlo agudo');
} else if(grados === 90) {
    console.log('Es un águlo recto');
} else if(grados >= 91 && grados <= 179) {
    console.log('Es un águlo obtuso');
} else if (grados === 180) {
    console.log('Es un ángulo llano'); 
} else {
    console.log('Error'); 
}

