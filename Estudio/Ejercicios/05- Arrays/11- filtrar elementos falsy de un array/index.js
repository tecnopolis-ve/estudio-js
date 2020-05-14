//escribir una función que devuelva los valores que no son 'null', 'undefined', 'NaN' de un array

function isFalsy (value) {
    return value !== null && value !== undefined && value !== NaN; 
}

function filterFalsy(list) {
    return list.filter(isFalsy); 
    }
}