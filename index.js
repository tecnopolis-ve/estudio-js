const API_KEY = 'c9480f3b';

// let translations = {
//     'es-ES': {
//         'myApp.welcomeText': 'Bienvenido a mi página web'
//     },
//     'en-GB': {
//         'myApp.welcomeText': 'Welcome to my website'
//     }
// };

// let translateElements = [...document.querySelectorAll('*[data-translation]')];

// translateElements.map(function(element) {
//     let texts = translations[navigator.language];
//     element.textContent = texts[element.dataset.translation];
// })

let countries = {
    'USA': '🇺🇸'
};


function movieInfo() {

    let searchTextInput = document.querySelector('#movie-title-input');
    let searchText = searchTextInput.value.replace(' ', '+').toLowerCase();

    fetch(`http://www.omdbapi.com/?i=t${searchText}&apikey=${API_KEY}`)
    .then(response => {
    let data = response.json();
    return data;
    })
    .then(function(data){
        let plotElement = document.querySelector('#movie-plot');
        let posterElement = document.querySelector('#movie-poster');
        let titleElement = document.querySelector('#movie-title');
        let tagListElement = document.querySelector('#movie-tag-list');
        let errorStyles = ['mt-1', 'text-left', 'text-red-500', 'text-xs', 'italic'];
    if (data.Error) {
        plotElement.classList.add(...errorStyles);
        // plotElement.classList.add('mt-1', 'text-left', 'text-red-500', 'text-xs', 'italic');

        plotElement.textContent = data.Error;
        posterElement.classList.add('hidden');
        titleElement.classList.add('hidden');
        tagListElement.classList.add('hidden');
    } else {
        let country = countries[data.Country] || '';
        let tagList = data.Genre.split(',');
        let tagListSpans = tagList.map(function(element) {
            return `
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #${element.trim()}
                </span>
            `;
        }).join('');

        plotElement.textContent = data.Plot;
        posterElement.src = data.Poster;
        titleElement.textContent = `${country} ${data.Title}`;
        tagListElement.innerHTML = tagListSpans;
        posterElement.classList.remove('hidden');
        titleElement.classList.remove('hidden');
        tagListElement.classList.remove('hidden');
        plotElement.classList.remove(...errorStyles);
    }
    
    let searchButton = document.querySelector('#search-button');
    searchButton.addEventListener('click', movieInfo);
});
}

movieInfo(); 
