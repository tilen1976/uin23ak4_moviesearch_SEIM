import { useParams } from "react-router-dom";
export default function Movie(props){
    const {slug} = useParams();

    return (
        <article className="movie-detail">
            <h2>{props.Title}</h2>
            <p>Utgitt: {props.Released}</p>
            <p>Spilletid: {props.Runtime}</p>
            <p>Sjanger: {props.Genre}</p>
            <p>{props.Director}</p>
            <p>Skuespillere:</p>
            <ul>
               {props.actors.map((actor, index) => (
				<li key={index}>
                    {actor}
                </li>
                ))}

            </ul>
            <p>{props.Plot}</p>
            <p>{props.Language}</p>
            <p>{props.Country}</p>

        </article>
    )
}