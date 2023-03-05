import './css/main.css';
import {useState, useEffect} from 'react';
import MovieList from './components/MovieList';
//import MagnifyingGlassIcon from '@heroicons/react/24/outline'


function App() {
  const [films, setFilms] = useState([]);

  const jamesBond = [];

  const [movies, setMovies] = useState([        {
    "Title": "Star Wars: Episode IV - A New Hope",
    "Year": "1977",
    "imdbID": "tt0076759",
    "Type": "movie",
    //"Poster": "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
},
{
    "Title": "Star Wars: Episode V - The Empire Strikes Back",
    "Year": "1980",
    "imdbID": "tt0080684",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
},
{
    "Title": "Star Wars: Episode VI - Return of the Jedi",
    "Year": "1983",
    "imdbID": "tt0086190",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
}]);
  

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?i=tt0055928&apikey=6cd98276`)
    //fetch(`https://newsapi.org/v2/top-headlines?country=no&category=${category}&apiKey=75b121c29f544dfab69ee28c4c9c8021`)
   //fetch(`https://newsapi.org/v2/everything?q=${search}&country=no&category=${category}&apiKey=75b121c29f544dfab69ee28c4c9c8021`)
     .then(res => res.json())
   //.then(data => console.log(data))
     .then(data => jamesBond.push(data))
     fetch(`http://www.omdbapi.com/?i=tt0057076&apikey=6cd98276`)
      .then(res => res.json())
     //.then(data => console.log(data))
      .then(data => jamesBond.push(data))
     //.then(data => jamesBond.push(data))

 }, [])

 console.log()

/* useEffect(() => {
  fetch(`http://www.omdbapi.com/?i=tt0057076&apikey=6cd98276`)
  //fetch(`https://newsapi.org/v2/top-headlines?country=no&category=${category}&apiKey=75b121c29f544dfab69ee28c4c9c8021`)
 //fetch(`https://newsapi.org/v2/everything?q=${search}&country=no&category=${category}&apiKey=75b121c29f544dfab69ee28c4c9c8021`)
   .then(res => res.json())
 //.then(data => console.log(data))
   //.then(data => setFilms(data))
   .then(data => jamesBond.push(data))

})*/

  //console.log(jamesBond)

  return (
    <div className="container">
      <header className="page-header">
        <h1>Filmsøk</h1>
       
      </header>
      <nav className="navigation">
          <a href="#noe" className='nav-links'>Noe</a>
          <a href="#noe2" className='nav-links'>Noe2</a>
        </nav>
      <aside className="search-bar">
        <h3>Søk</h3>
        <section className="search-section">
            <form className="find-film">
              <input type="text" id="title" name="title" className="input-field" placeholder="Tittel..">
              </input>
               {/**Lage forstørrelsesglass */}
              <button type="submit" className="search-btn">
                Finn film
              </button>
            </form>
        </section>
      </aside>
      <main className='main-content'>
        <article className="page-content">
          <h2>Innhold</h2>
          <ul>
          <MovieList movies={movies} />
      
          
          </ul>

        </article>
        
      </main>
      <footer className='info-label'>
        Laget av noen
      </footer>
    
    </div>
  );
}

export default App;
