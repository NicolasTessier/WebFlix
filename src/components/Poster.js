import { Link } from "react-router-dom";
import "./Poster.css";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../favouritesStore";

const Poster = ({ movie }) => {
  const favourites = useSelector((state) => state.favourites);
  const dispatch = useDispatch();

  const toggleFavourite = (event) => {
    event.preventDefault();
    dispatch(actions.toggle({ movie }));
  };

  const isFavourite = () => {
    return favourites.find((favourite) => favourite.id === movie.id)
      ? "💛"
      : "🤍";
  };

  return (
    <div className="poster">
      <Link to={`/movie/${movie.id}`}>
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
      <div className="favourite" onClick={toggleFavourite}>
        {isFavourite()}
      </div>
    </div>
  );
};

export default Poster;
