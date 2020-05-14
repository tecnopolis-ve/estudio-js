/*Dado un lenguaje de programación, introducido por el usuario, mostrar el sistema de tipos utilizado
por el lenguaje. Mostrar el texto `No se reconoce el lenguaje de programación introducido`, si el
lenguaje introducido no se encuentra en el siguiente listado:

- `C`, mostrar `Sistema de tipos fuerte y estático`
- `C++`, mostrar `Sistema de tipos fuerte y estático`
- `Python`, mostrar `Sistema de tipos fuerte y dinámico`
- `Ruby`, mostrar `Sistema de tipos fuerte y dinámico`
- `JavaScript`, mostrar `Sistema de tipos débil y dinámico`
*/

let lenguaje = window.prompt('Introduce un lenguaje de programación');

switch (lenguaje) {
    case 'C':
    case 'C++':
        window.alert('Sistema de tipos fuerte y estático');
        console.log('Sistema de tipos fuerte y estático');
    break;
    case 'Python':
    case 'Ruby':
        window.alert('Sistema de tipos fuerte y dinámico');
        console.log('Sistema de tipos fuerte y dinámico');
    break;
    case 'JavaScript':
        window.alert('Sistema de tipos débil y dinámico');
        console.log('Sistema de tipos débil y dinámico');
    break; 
    default:
        window.alert('No se reconoce el lenguaje de programación');
        console.log('No se reconoce el lenguaje de programación'); 
}