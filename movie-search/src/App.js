import './css/main.css';
import {useState, useEffect} from 'react';
import Header from './components/Header';
import Search from './components/Search';
import SearchResult from './components/SearchResults';


function App() {

  const [james, setJamesBond] = useState([])
  const [movies, setMovies] = useState([]);
  //const jamesBond = [fetch('http://www.omdbapi.com/?s=james+bond*&type=movie&apikey=6cd98276')]
  const [search, setSearch] = useState([]);
 
  
  useEffect(() =>{
    fetch(`http://www.omdbapi.com/?s=james+bond*&type=movie&apikey=6cd98276`)
    .then(res => res.json())
    .then(data => setMovies(data.Search))
}, [])


const getMovies = async() => {
  const url = `http://www.omdbapi.com/?s=${search}&type=movie&apikey=6cd98276`;
  const response = await fetch(url);

  const data = await response.json();
  console.log(data.Search);

  setMovies(data.Search);
}

  return (
    <div className="container">
      <Header />
   
        <nav className="navigation">
          <a href="#noe" className='nav-links'>Info om</a>
          <a href="#noe2" className='nav-links'>Tanker</a>
        </nav>
        <Search setSearch={setSearch} getMovies={getMovies}/>
      
        <SearchResult movies={movies}/>   
    
      <footer className='info-label'>
        Laget av noen
      </footer>
    
    </div>
  );
}

export default App;
