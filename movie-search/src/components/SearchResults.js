import MovieCard from "./MovieCard";

export default function SearchResult({jamesBond}){
    return (
        <main className="main-content">
            <h2>Søkeresultat:</h2>
            <ol>
              {jamesBond.map((movie, index) => (
				<li key={index}>
					<MovieCard title={movie.Title} year={movie.Year} imdbID={movie.imdbID}poster={movie.Poster}/>
				</li>
			))}

            </ol>
        </main>
       
       
    )
}