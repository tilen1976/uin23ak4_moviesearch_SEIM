import './css/main.css';
import {useState, useEffect} from 'react';
//import JamesBond from './components/JamesBond';


import Header from './components/Header';
import Search from './components/Search';
import FilmList from './components/FilmList';
import SearchResult from './components/SearchResults';


function App() {

  //const [movies, setMovies] = useState([]);
  //sette søkeresultat James Bond her
  const[jamesBond, setJamesBond] = useState([]);
  const [search, setSearch] = useState([{Title: "Bla bla"}, {Title: "bla bla 2"}]);
 
const getJamesBond = async() => {
  //søkeresultat de 10 første filmene, må legges i useState, men er ikke trofast mot begrepet film
  //kan man filtrere ut de uten imbd id
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
      <Header />
   
        <nav className="navigation">
          <a href="#noe" className='nav-links'>Info om</a>
          <a href="#noe2" className='nav-links'>Tanker</a>
        </nav>
        <Search />
      
        <SearchResult jamesBond={jamesBond}/>   
    
      <footer className='info-label'>
        Laget av noen
      </footer>
    
    </div>
  );
}

export default App;
