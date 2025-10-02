import { useState, useEffect } from "react";
import films from "../film";


const FilmList = () => {
  
  // stato per salvare il genere attualmente selezionato
  const [activeType, setActiveType] = useState("");

  // stato che contiene la lista dei film da mostrare (inizialmente tutti)
  const [results, setResults] = useState(films);

  useEffect(() => {

    if (activeType === "") {
      setResults(films);
    } else {


      setResults(films.filter((film) => film.genre === activeType));
    }
  }, [activeType]);


  // creo un array con tutti i generi
  const genres = films.map((film) => film.genre);

  return (

    <section className="container">

      <div className="box">

        <select
          className="film-select"
          value={activeType}
          onChange={(e) => setActiveType(e.target.value)}
        >

          <option value="">Tutti i generi</option>
          {genres.map((genre, i) => (

            <option key={i} value={genre}>
              {genre}
            </option>
            
          ))}

        </select>
      </div>

      <ul className="film-list">

        {results.map((movie, index) => (

          <li key={index} className="film-card">
            <div className="poster"></div>
            <div className="info">
                <h3>{movie.title}</h3>
              <span>{movie.genre}</span>
            </div>
          </li>

        ))}
      </ul>

    </section>
  );
};

export default FilmList;
