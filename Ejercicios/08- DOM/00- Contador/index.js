const element = document.getElementById('value');

    document.getElementById('increment').addEventListener('click', function(event) {
        let sum = parseInt(element.innerText);
        sum++;   
        element.innerText = sum; 
    });

    document.getElementById('decrement').addEventListener('click', function (event) {
        let subtract = parseInt(element.innerText);
        subtract--; 
        element.innerText = subtract; 
    })