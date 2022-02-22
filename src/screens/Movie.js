import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchMovie, fetchRecommandations } from "../ApiHelper";
import Spinner from "../components/Spinner";
import MoviesList from "../components/MoviesList";
import "./Movie.css";
import Chip from "../components/Chip";
import Rating from "../components/Rating";

function Movie() {
  const params = useParams();
  const navigate = useNavigate();

  const { data, isLoading, error, isFetching } = useQuery(
    "movie",
    () => fetchMovie(params.id),
    { cacheTime: 0 }
  );
  const {
    data: recommandations,
    isLoading: loadingReco,
    error: errorReco,
  } = useQuery("recommandations", () => fetchRecommandations(params.id), {
    cacheTime: 0,
  });

  useEffect(() => {
    if (!isFetching && data.success === false) navigate("/");
  }, [isFetching]);

  return (
    <div className="movie">
      {isLoading && <Spinner />}
      {!isLoading && !error && (
        <>
          <div className="infos">
            {data.poster_path ? (
              <img
                className="img"
                alt="poster"
                src={process.env.REACT_APP_API_IMG + data.poster_path}
              />
            ) : (
              <div className="img no_image" />
            )}
            <div className="infos_text">
              <p className="title">{data.title}</p>
              <p className="text">{"Date de sortie " + data.release_date}</p>
              <p className="text">{"Durée " + data.runtime + " minutes"}</p>
              <div className="chipContainer">
                {data.genres.map((genre) => (
                  <Chip key={genre.id} label={genre.name} />
                ))}
              </div>
            </div>
          </div>
          <p className="text">{data.overview}</p>
          <h2 className="subtitle">Note du public : </h2>
          <Rating rank={data.vote_average} />
          {loadingReco && <Spinner />}
          {!loadingReco && !errorReco && (
            <>
              <h2 className="subtitle">Contenu Similaire : </h2>
              <MoviesList data={recommandations.results} horizontal={true} />
            </>
          )}
        </>
      )}
    </div>
  );
}

export default Movie;
