import { Link } from "react-router-dom";
import "./Poster.css";

const Poster = ({ movie }) => {
  return (
    <div className="poster">
      <Link className="test" to={`/movie/${movie.id}`}>
        {movie.poster_path ? (
          <img
            className="poster_img"
            alt="poster"
            src={process.env.REACT_APP_API_IMG + movie.poster_path}
          />
        ) : (
          <div className="poster_img no_image" />
        )}
      </Link>
      <Link to={`/movie/${movie.id}`}>
        <div className="poster_hover">
          <p className="poster_title">{movie.title}</p>
        </div>
      </Link>
    </div>
  );
};

export default Poster;
