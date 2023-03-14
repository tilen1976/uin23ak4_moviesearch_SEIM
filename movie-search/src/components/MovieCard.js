/*
 og eventuelle priser 
*/

import { useState, useEffect } from "react";
import Movie from "./Movie";
import {Routes, Route, Link, useParams } from 'react-router-dom'

export default function MovieCard({title, year, imdbID, poster}){
    
   // const linkAdress = `https://www.imdb.com/title/${imdbID}`
   
    const linkAdress2 = `http://www.omdbapi.com/?i=${imdbID}&apikey=6cd98276`
   
    const placeholderPoster = "../images/placeholderTemp.webp";
    const onImageError = (e) => {e.target.src = placeholderPoster}

    const [movieDetail, setMovieDetail] = useState([]);

    const getMovieDetail = async() => {
        const url = linkAdress2;
        const response = await fetch(url);

        const data = await response.json();


        setMovieDetail(data);

    }

    useEffect(() =>{
       getMovieDetail()
    })

    return (
        <>
        <article className="movie-content">
            <h3 className="movie-title">{title}</h3>
            <section className="movie">
                <img className="movie-poster" src={poster ? poster : placeholderPoster} alt="tekst" onError={onImageError}/> 
            
        
                <section className="movie-info">
                   <p>År publisert: {year}</p>
                   <p>Sjanger: {movieDetail.Genre ? movieDetail.Genre : ''}</p>
                   <p>Regissør: {movieDetail.Director? movieDetail.Director : ''}</p>
                   <p>Skuespillere: {movieDetail.Actors ? movieDetail.Actors : ''}</p>
                   

                   <p>{movieDetail.Plot !== 'N/A' ? movieDetail.Plot : ''}</p>
    
                    <Link to={imdbID}>Les mer...</Link>

                   <a href={linkAdress2}>Les mer...</a>
                
               </section>
            </section>

        </article>

   
   
      
      </>
    )
}