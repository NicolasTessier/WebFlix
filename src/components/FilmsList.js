import data from "../data.json";
import Poster from "./Poster";

const MoviesList = () => {
  const movies = data.movies;
  return (
    <ul>
      {movies.map((movie, key) => (
        <li key={key}>
          <Poster movie={movie} />
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;
