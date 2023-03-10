import MovieCard from "./MovieCard";

export default function SearchResult(){
    return (
        <main className="main-content">
            <h2>Søkeresultat:</h2>
            <ol>
                <li>
                <MovieCard />
                </li>

            </ol>
        </main>
       
       
    )
}