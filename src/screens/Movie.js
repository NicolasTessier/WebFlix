import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import data from "../data.json";

function Movie() {
  const [movie, setMovie] = useState("");
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const movie = data.movies.find((movie) => movie.id === Number(params.id));
    if (!movie) navigate("/");
    setMovie(movie);
  }, [params, navigate]);

  return <>{movie ? <p>{movie.title}</p> : <p> Loading ...</p>}</>;
}

export default Movie;
