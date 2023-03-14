
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

Søkeresultater skal vise poster 
(hvis det finnes i resultatene. 
Hvis ikke, bruk et placeholder-bildeLinks to an external site.) 
som et bilde på nettsiden, tittel, år publisert, sjanger, regissør, skuespillere og eventuelle priser 
*/

export default function MovieCard({title, year, imdbID, poster}){
    const linkAdress = `https://www.imdb.com/title/${imdbID}`
    const placeholderPoster = "../images/placeholderTemp.webp";
    const onImageError = (e) => {e.target.src = placeholderPoster}


    return (
        <article className="movie-content">
            <h3 className="movie-title">{title}</h3>
            {/*Ternary om det er en poster her */}
          

            <img className="movie-poster" src={poster ? poster : placeholderPoster} alt="tekst" onError={onImageError}/> 

      
        
            <section className="movie-info">
                <p>Årstall: {year}</p>
                <p>Bla bla bla</p>
                <p></p>
                {/*legge på en if her, ev sile på at filmen har en imbd id */}
                <a href={linkAdress}>Les mer på ...</a>
                
            </section>
            

        </article>
    )
}