import { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Movie.css";
import Chip from "../components/Chip";
import Rating from "../components/Rating";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../components/Spinner";
import MoviesList from "../components/MoviesList";

function Movie() {
  const params = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "FETCH_MOVIE", id: params.id });
  }, [dispatch, params.id]);

  const movie = useSelector((state) => state.details);

  const isFirstRun = useRef(true);

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    if (movie.success === false) navigate("/");
  }, [movie]);

  return (
    <>
      {isFirstRun.current ? (
        <div className="spinnerContainer">
          <Spinner />
        </div>
      ) : (
        <>
          {movie.success !== false && (
            <div className="movie">
              <>
                <div className="infos">
                  {movie.poster_path ? (
                    <img
                      className="img"
                      alt="poster"
                      src={process.env.REACT_APP_API_IMG + movie.poster_path}
                    />
                  ) : (
                    <div className="img noImage" />
                  )}
                  <div className="infos_text">
                    <p className="title">{movie.title}</p>
                    <p className="text">
                      {"Date de sortie " + movie.release_date}
                    </p>
                    <p className="text">
                      {"Durée " + movie.runtime + " minutes"}
                    </p>
                    <div className="chipContainer">
                      {movie.genre &&
                        movie.genres.map((genre) => (
                          <Chip key={genre.id} label={genre.name} />
                        ))}
                    </div>
                  </div>
                </div>
                <p className="text">{movie.overview}</p>
                <h2 className="subtitle">Note du public : </h2>
                <Rating rank={movie.vote_average} />
                {movie.recommandations.length > 0 && (
                  <>
                    <h2 className="subtitle">Contenu Similaire : </h2>
                    <MoviesList
                      data={movie.recommandations}
                      horizontal={true}
                    />
                  </>
                )}
              </>
            </div>
          )}
        </>
      )}
    </>
  );
}

export default Movie;
