/* Dado un producto, introducido por el usuario, devolver el precio asociado al mismo, teniendo en
cuenta el siguiente listado:

- Procesador: 249€
- Memoria: 125€
- HDD: 50€
- SSD: 125€

El programa deberá devolver el texto `No disponemos del artículo solicitado` cuando se introduzca
un producto que no esté incluido en el listado anterior.
*/

let producto = window.prompt('Introduce un producto'); 

switch (producto) {
    case 'Procesador': 
        console.log('249€');
    break; 
    case 'Memoria': 
        console.log('125€');
    break;
    case 'HDD':
        console.log('50€');
    break; 
    case 'SSD':
        console.log('125€');
    break; 
    default:
        console.log('No disponemos del artículo solicitado'); 
}