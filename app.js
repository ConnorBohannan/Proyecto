// Grabbing the fields for movie results
// grab movie name
const Name = document.querySelector('#Name')
// grab release date 
const Released = document.querySelector('#Released')
//grab poster
const Poster = document.querySelector('#Poster')
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

// create movieSearch function
const movieSearch = (event) => {
    // prevent default behavior
    // event.preventDefault()
     // grab Year box value
    const Year = document.querySelector('#Year').value
     // grab Title box value
    const Title = document.querySelector('#Title').value
    // grab Plot value
    const Plot = document.querySelector('#Plot').value
    //api URL 
    const url = `http://www.omdbapi.com/?t=${Title}&y=${Year}&plot=${Plot}&apikey=9fdeb5da`

    fetch(url)
        .then(res => res.json())
        .then(res => {
            console.log(res)
                Name.innerText = `Title: ${res.Title}`
                Released.innerText = `Year: ${res.Year}`
                Writer.innerText = `Writer(s): ${res.Writer}`
                Poster.src = `${res.Poster}`
                Director.innerText= `Director: ${res.Director}`
                moviePlot.innerText = `Plot: ${res.Plot}`
                Runtime.innerText = `Runtime: ${res.Runtime}`
                Actors.innerText = `Actors: ${res.Actors}` 
                rottenTomatoes.innerText= `Rotten Tomatoes Score: ${res.Ratings[1].Value}`
        }) 
}

// grab submit button 
const submitButton = document.querySelector('#submit')

// listen to click of submit button and run movieSearch function
submitButton.addEventListener('click', (event) => {
    event.preventDefault()
    movieSearch()
    
})