const result = document.querySelector('#response');
const bouton = document.querySelector('#bouton');

const getMovie = (movie, year) => {
    result.innerHTML = '';
    const URL = `http://www.omdbapi.com/?s=${movie}&y=${year}&apikey=adf1f2d7`;
    fetch(URL)
    .then((response) => {
        if(response.ok && response.status === 200){
            return response.json()
        }
    })
    .then((jsonMovie) => {
        jsonMovie.Search.forEach(item => {
            result.insertAdjacentHTML('beforeend', `
            <li>
                <div class="card" style="width: 18rem;">
                <img src="${item.Poster}" class="card-img-top" alt="...">
                <div class="card-body">
                    <p class="card-title">${item.Title}</p>
                    <p>${item.Year}</p>
                    <a href="#" class="btn btn-primary">Voir le film</a>
                </div>
                </div> 
            </li> 
            `);
        });
    })
    .catch((error) => {
        console.log("Noooooo! Something error:");
        console.log(error);
    });
};

getMovie('harry potter');

bouton.addEventListener('click', (event) => {
    event.preventDefault();
    const myMovie = document.querySelector('#userInput').value;
    const myYear = document.querySelector('#userInputYear').value
    getMovie(myMovie, myYear);
});







// adf1f2d7
// 48727053
// 8691812a