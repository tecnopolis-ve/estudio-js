let tamano = parseInt(window.prompt('Introduce un número'));
let diamond = '';

//el rombo siempre es impar
if(tamano%2==0){
    tamano++
}

let fill = 0;

for(let i = 0; i < tamano; i++){
    fill = 1 + i * 2;
    if(fill > tamano){
        fill = tamano - (fill - tamano);
    }
    const ini = Math.round((tamano - fill) / 2);
    const fin = tamano - ini;
    for (let j = 1; j <= tamano; j++){
        if (j <= ini || j > fin){
            diamond += ' ';
        }else{
            diamond += '*';
        }
    }
    diamond += '\n';
}

console.log(diamond);
