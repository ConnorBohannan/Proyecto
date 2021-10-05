// Grabbing the fields for movie results
// grab movie name
const Name = document.querySelector('#Name')
// grab release date 
const Released = document.querySelector('#Released')
// grab runtime 
const Runtime = document.querySelector('#Runtime')
// grab director
const Director = document.querySelector('#Director')
// grab writer
const Writer = document.querySelector('#Writer')
// grab actors
const Actors = document.querySelector('#Actors')
// grab movie plot 
const moviePlot = document.querySelector('#moviePlot')
// grab rotten tomatoes 
const rottenTomatoes = document.querySelector('#rottenTomatoes')


// submit movieSearch form
const movieSearch = (event) => {
    // prevent default behavior
    // event.preventDefault()
    // grab Title box value
    const Year = document.querySelector('#Year').value
    const Title = document.querySelector('#Title').value
    // grab Year box value
    // grab Plot value
    const Plot = document.querySelector('#Plot').value
    //api URL 
    const url = `http://www.omdbapi.com/?s=${Title}&apikey=9fdeb5da`

    fetch(url)
        .then(res => res.json())
        .then(res => {
            console.log(res)
            console.log(res)
            for (let i = 0; i < res.Search.length; i++) {
                console.log(res.Search[i])
                        Name.innerHTML = res.Search[i].Title
                        Released.innerText = res.Search[i].Year 
                        // Image.innerText = res.Search[i].Poster
                    }
            // tentative adding inner text to H3 tags
            // Name.innerText = res.search.title 
            // Released.innerText = res.
            // Runtime.innerText = res.
            // Director.innerText = res.
            // Writer.innerText = res.
            // Actors.innerText = res.
            // moviePlot.innerText = res.
            // rottenTomatoes.innerText = res.

        })
    
}


const submitButton = document.querySelector('#submit')

submitButton.addEventListener('click', (event) => {
    event.preventDefault()
    movieSearch()
    
})

// grab form
// const form = document.querySelector('#movieSearch')

// listen to form submit
// movieSearch.addEventListener("submit", movieSearch)







// fetch takes an argument which is the URL that we want to GET data from
// fetch (url)
//parse data into JS
    // .then((res) => res.json())
    // we write logic inside of what we want to happen below
//     .then((res) => {
//         console.log(res)
//     for (let i = 0; i < XXXXXX.length; i++) {
//         const movie = document.createElement('h3')
//         movie.innerText = res.XXXXXX[i].name
//         output.appendChild(movie)
//     }
// })