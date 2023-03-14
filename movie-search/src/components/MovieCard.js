
/*
Poster
: 
"https://m.media-amazon.com/images/M/MV5BMzg4MjM3MDgtMzljMi00OTJiLThiOGUtMTVhOTcwYTFjMWU1XkEyXkFqcGdeQXVyMTY1MTcxMzc@._V1_SX300.jpg"
Title
: 
"Pan Bahar Pierce Brosnan James Bond Style Television Commercial"
Type
: 
"movie"
Year
: 
"2016"
imdbID
: 
"tt12003104"

Sjekk routing
*/



export default function MovieCard({title, year, imdbID}){
    //Endre denne - skal være et apikall som setter inn "imdbID": "tt0098669"
    const linkAdress = `https://www.imdb.com/title/${imdbID}`
    const placeholderPoster = "../images/placeholderTemp.webp";

    return (
        <article className="movie-content">
            <h3 className="movie-title">{title}</h3>
            {/*Ternary om det er en poster her */}
            <img className="movie-poster" src={placeholderPoster} alt="tekst"/>
            <section className="movie-info">
                <p>Årstall: {year}</p>
                <p>Bla bla bla</p>
                {/*legge på en if her, ev sile på at filmen har en imbd id 
                <MoviePage med id*/}
                <a href={linkAdress}>Les mer på ...</a>
                {/**"imdbID": "tt0098669", */}
                
            </section>
            

        </article>
    )
}