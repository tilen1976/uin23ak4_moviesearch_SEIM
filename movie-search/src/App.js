import './css/main.css';
import {useState, useEffect} from 'react';
import JamesBond from './components/JamesBond';
import {MagnifyingGlassIcon} from '@heroicons/react/24/outline'


function App() {

  //const [movies, setMovies] = useState([]);
  //sette søkeresultat James Bond her
  const[jamesBond, setJamesBond] = useState([]);

  /*
  const [movies, setMovies] = useState([     
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
  
*/
const getJamesBond = async() => {
  //søkeresultat de 10 første filmene, må legges i useState, men er ikke trofast mot begrepet film
  const url = 'http://www.omdbapi.com/?s=james+bond&type=movie&page=10&apikey=6cd98276';
  const response = await fetch(url);

  const data = await response.json();


  setJamesBond(data.Search);

}

useEffect(() =>{
  getJamesBond()
}, [])

console.log(jamesBond)

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
               
              <button type="submit" className="search-btn"><MagnifyingGlassIcon />Søk
              </button>
            </form>
        </section>
      </aside>
      <main className='main-content'>
        <article className="page-content">
          <h2>Innhold</h2>
          <ul>
            <JamesBond jamesBond={jamesBond}
              />
       
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
