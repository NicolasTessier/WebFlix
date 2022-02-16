import Poster from "./Poster";
import "./MoviesList.css";

const MoviesList = ({ data }) => {
  return (
    <ul className="movies_list">
      {data.map((movie, key) => (
        <li key={key} className="movie_item">
          <Poster movie={movie} />
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;
