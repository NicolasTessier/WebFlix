import { Link } from "react-router-dom";

const Poster = ({ movie }) => {
  return (
    <>
      <p>{movie.title}</p>
      <Link to={`/movie/${movie.id}`}>En savoir plus</Link>
    </>
  );
};

export default Poster;
