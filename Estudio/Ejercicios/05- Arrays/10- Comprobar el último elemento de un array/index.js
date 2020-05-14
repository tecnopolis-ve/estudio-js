
//para buscar el último elemento

function isLast(list = [], value) {
    let lastIndex = list.length - 1; 
    return list.lastIndexOf(value) === lastIndex; 
}; 