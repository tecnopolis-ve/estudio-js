
let imgButton1 = document.querySelector('#beach-like');
let imgButton2 = document.querySelector('#desert-like');
let imgButton3 = document.querySelector('#woods-like');
let otherImg = document.querySelector('#nuevas-like');

let sections = {
    beach: {
        description: 'Si te gustan las playas, aquí podrás mirar más de distintas partes del mundo:', 
    },
    desert: {
        description: 'Si te gustan los desiertos, aquí podrás mirar más de distintas partes del mundo:'
    },
    woods: {
        description: 'Si te gustan los bosques, aquí podrás mirar más de distintas partes del mundo:'
    },
    // nuevas: {
    //     description: 'Quizás aquí encuentres algo que te guste más'
    // }
};

function onButtonClick(event){
    let [target] = event.target.id.split('-'); 
    let container = document.getElementById(`${target}-container`);
    let descriptionText = sections[target].description; 
    let sectionList = Object.keys(sections);
    
        sectionList.forEach(element => document.getElementById(`${element}-container`).classList.add('hidden'));
    
        container.classList.remove('hidden');
        container.innerHTML = `
            <p class="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3" role="alert">
                ${descriptionText}
            </p>
        `;

    let myId = "IbxiLlW8y0lgxnYUU6MH1XqL-vfYmz88d3RUX4Hc6P0"; 
    let url = `https://api.unsplash.com/search/photos/?client_id=${myId}&query=${target}`;
            
    fetch(url)
        .then((response) => {
            let data = response.json();
            return data;
        })
        .then((data) => {
            
            data.results.forEach(element => {
                let img = document.createElement('img'); 
                img.src = element.urls.regular;
                img.alt = element.alt_description;
                img.classList.add('object-scale-down', 'h-48', 'w-full', 'py-2', 'px-4');  
                
                let photoUser = document.createElement('h6');
                photoUser.appendChild(document.createTextNode(`foto hecha por: ${element.user.username}`));
                photoUser.classList.add('text-bold', 'italic', 'float-right'); 
                        
                container.append(img, photoUser);
            })
            
        });
};

function otherOption(event){
    let headInstruction = document.getElementById('Instrucción');
    headInstruction.classList.add('hidden');  
    otherImg.classList.add('hidden'); 
    let originalContainer = document.getElementById('cuerpo');
    originalContainer.classList.add('hidden');

    let newContainer = document.getElementById('nuevas-container');

    let newInstruction = document.createElement('h1'); 
    newInstruction.appendChild(document.createTextNode('¿Qué quieres ver?'));
    newContainer.append(newInstruction);

    let query = document.createElement('input');
    query.classList.add('shadow', 'appearance-none', 'border', 'rounded', 'w-full', 'py-2', 'px-3', 'text-gray-700', 'leading-tight', 'focus:outline-none', 'focus:shadow-outline');
    query.type = 'text'; 
    query.placeholder = 'Buscar';
    query.id = 'nuevas'; 
    newContainer.append(query);

    query.addEventListener('input', function(event){ 
        let myId = "IbxiLlW8y0lgxnYUU6MH1XqL-vfYmz88d3RUX4Hc6P0"; 
        let url = `https://api.unsplash.com/search/photos/?client_id=${myId}&query=${query.value}`;
        
            fetch(url)
            .then((response) => {
                let data = response.json();
                return data;
            })
            .then((data) => {
                    
                data.results.forEach(element => {
                    let img = document.createElement('img'); 
                    img.src = element.urls.regular;
                    img.alt = element.alt_description;
                    img.classList.add('object-scale-down', 'h-48', 'w-full', 'py-2', 'px-4');  
                        
                    let photoUser = document.createElement('h6');
                    photoUser.appendChild(document.createTextNode(`foto hecha por: ${element.user.username}`));
                    photoUser.classList.add('text-bold', 'italic', 'float-right'); 
                                
                    newContainer.append(img, photoUser);
            })
                   
        });
    })
}

imgButton1.addEventListener('click', onButtonClick);
imgButton2.addEventListener('click', onButtonClick);
imgButton3.addEventListener('click', onButtonClick);
otherImg.addEventListener('click', otherOption);