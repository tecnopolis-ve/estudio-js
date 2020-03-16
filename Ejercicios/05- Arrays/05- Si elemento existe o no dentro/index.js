//Funcion que dado un valor, compruebe si el elemento existe dentro del array

function find(value, list) {

    let hasBeenFinded = false; 

    for (let index in list) {
        let currentValue = list[index]; 
        
        if (valueToFind === currentValue) {
            hasBeenFinded = true; 
        }
    }
    return hasBeenFinded; 
}

find('blue', ['blue', 'red', 'white'])