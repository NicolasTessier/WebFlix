import MoviesList from "../components/MoviesList";
import "./Favourites.css";
import { useSelector } from "react-redux";

function Favourites() {
  const favourites = useSelector((state) => state.favourites);

  return (
    <div className="favourites">
      <h1 className="title">
        Favorites
        <span role="img" aria-label="heart">
          💛
        </span>
      </h1>
      <MoviesList data={favourites} horizontal={false} />
    </div>
  );
}

export default Favourites;
