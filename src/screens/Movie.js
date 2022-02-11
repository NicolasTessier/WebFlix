import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../data.json";

function Movie() {
  const [movie, setMovie] = useState("");
  const params = useParams();

  useEffect(() => {
    const movie = data.movies.find((movie) => (movie.id = params.id));
    setMovie(movie);
  }, [params]);

  return <>{movie ? <p>{movie.title}</p> : <p> Loading ...</p>}</>;
}

export default Movie;
