
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
*/

export default function MovieCard(){

    return (
        <article className="movie-content">
            <h3 className="movie-title">Tittel</h3>
            <img className="movie-poster" src="../images/placeholderTemp.webp" alt="tekst"/>
            <section className="movie-info">
                <p>Årstall</p>
                <p>Bla bla bla</p>
                <a href="https://www.imdb.com/title/tt12003104">Les mer på ...</a>
                
            </section>
            

        </article>
    )
}