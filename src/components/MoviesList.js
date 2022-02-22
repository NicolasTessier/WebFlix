import Poster from "./Poster";
import "./MoviesList.css";

const MoviesList = ({ data, horizontal }) => {
  return (
    <ul className={horizontal ? "movies_list horizontal" : "movies_list"}>
      {data.map((movie, key) => (
        <li key={key} className="movie_item">
          <Poster movie={movie} />
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;
