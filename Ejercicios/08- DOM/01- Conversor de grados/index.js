
function celsiusToFahrenheit (celsius) {
    return (celsius * 1.8) + 32; 
}

document.querySelector('#convertButton').addEventListener('click', function() {
    let inputElm = document.querySelector('#inputElm');
    let resultElm = document.querySelector('#resultElm');
    let value = parseFloat(inputElm.value);

    resultElm.textContent = `${celsiusToFahrenheit(value)} º F`; 

   if(Number.isNaN(value)) {
       resultElm.textContent = '0º F';
   } else {
       resultElm.textContent; 
   }
})

document.querySelector('#errorMessage').addEventListener('click', function() {
    let inputElm = document.querySelector('#inputElm');
    let value = parseFloat(inputElm.value);
    let message = document.querySelector('#errorMessage');
    
    
})
