import MovieCard from "./MovieCard";

export default function SearchResult({jamesBond}){

    //useState med jamesBond som default
    //lage metoder i Search
    return (
        <main className="main-content">
            <h2>Søkeresultat:</h2>
            <ol>
              {jamesBond.map((movie, index) => (
				<li key={index}>
					<MovieCard title={movie.Title} year={movie.Year} imdbID={movie.imdbID}/>
				</li>
			))}

            </ol>
        </main>
       
       
    )
}