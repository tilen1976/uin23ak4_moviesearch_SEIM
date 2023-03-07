
import JamesBond from './JamesBond';

export default function FilmList({jamesBond}){

    return (

        <article className="page-content">
        <h2>Filmer:</h2>
        <ol>
          <JamesBond jamesBond={jamesBond}
            />
     
        </ol>

      </article>

    )
}