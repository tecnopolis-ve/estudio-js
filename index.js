
const myId = "IbxiLlW8y0lgxnYUU6MH1XqL-vfYmz88d3RUX4Hc6P0"; 

let imgButton1 = document.querySelector('#beach-like');
let imgButton2 = document.querySelector('#desert-like');
let imgButton3 = document.querySelector('#woods-like');
let otherImg = document.querySelector('#nuevas-like');
let unsplashLogo = document.querySelector('#logo'); 

const sections = {
    beach: {
        description: 'Si te gustan las playas, aquí podrás mirar más de distintas partes del mundo:', 
    },
    desert: {
        description: 'Si te gustan los desiertos, aquí podrás mirar más de distintas partes del mundo:'
    },
    woods: {
        description: 'Si te gustan los bosques, aquí podrás mirar más de distintas partes del mundo:'
    }
};

function onButtonClick(event){
    unsplashLogo.classList.add('absolute', 'top-0', 'right-0');
    let [target] = event.target.id.split('-'); 
    let container = document.getElementById(`${target}-container`);
    let descriptionText = sections[target].description; 
    let sectionList = Object.keys(sections);
    
        sectionList.forEach(element => document.getElementById(`${element}-container`).classList.add('hidden'));
    
        container.classList.remove('hidden');
        container.innerHTML = `
            <p class="bg-orange-300 border-t border-l border-gray-500 text-gray-600 px-4 py-3" role="alert">
                ${descriptionText}
            </p>
        `;

    const url = `https://api.unsplash.com/search/photos/?client_id=${myId}&query=${target}`;
            
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
                img.classList.add('bg-orange-400', 'border-l', 'border-gray-500', 'object-scale-down', 'h-48', 'w-full', 'py-2', 'px-4');  
                
                let photoUser = document.createElement('h6');
                photoUser.appendChild(document.createTextNode(`foto hecha por: ${element.user.username}`));
                photoUser.classList.add('bg-orange-300', 'font-mono', 'text-center', 'text-bold', 'text-gray-600','italic', 'float-right'); 
                        
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
    unsplashLogo.classList.add('absolute', 'top-0', 'right-0');
   
    let formContainer = document.getElementById('form-container');
    let imageContainer = document.getElementById('nuevas-container');

    let newInstruction = document.createElement('h1'); 
    newInstruction.appendChild(document.createTextNode('¿Qué quieres ver?'));
    newInstruction.classList.add('text-serif', 'text-gray-600', 'text-3xl', 'py-2', 'px-4');
    formContainer.append(newInstruction);

    let query = document.createElement('input');
    query.classList.add('shadow', 'appearance-none', 'border', 'rounded', 'w-auto', 'py-2', 'px-3', 'text-gray-700', 'leading-tight', 'focus:outline-none', 'focus:shadow-outline', 'placeholder-orange-700', 'placeholder-opacity-50');
    query.type = 'text'; 
    query.placeholder = 'Buscar';
    query.id = 'nuevas'; 
    formContainer.append(query);

    query.addEventListener('keyup', function(event){ 
        const url = `https://api.unsplash.com/search/photos/?client_id=${myId}&query=${query.value}`;

        if(event.keyCode === 13){ 
            
        const url = `https://api.unsplash.com/search/photos/?client_id=${myId}&query=${encodeURI(query.value)}`;
            
        fetch(url)
            .then((response) => {
                let data = response.json();
                return data;
            })
            .then((data) => {
                
               imageContainer.innerHTML = '';  
               data.results.forEach(element => {
                    let img = document.createElement('img');
                    img.classList.add('h-screen', 'w-screen', 'py-2', 'px-4', 'object-scale-down');
                    img.src = element.urls.regular;
                    img.alt = element.alt_description;

                    let photoUser = document.createElement('h6');
                    photoUser.classList.add('font-mono', 'text-center', 'text-bold', 'italic');  
                    photoUser.appendChild(document.createTextNode(`foto hecha por: ${element.user.username}`));
                    
                imageContainer.append(img, photoUser);
            })       
        });
    } 
})
        
}

imgButton1.addEventListener('click', onButtonClick);
imgButton2.addEventListener('click', onButtonClick);
imgButton3.addEventListener('click', onButtonClick);
otherImg.addEventListener('click', otherOption);
