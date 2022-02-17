import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchMovie } from "../ApiHelper";

function Movie() {
  const params = useParams();
  const navigate = useNavigate();

  const { data, isLoading, error, isFetching } = useQuery("movie", () =>
    fetchMovie(params.id)
  );

  useEffect(() => {
    if (!isFetching && data.success === false) navigate("/");
  }, [isFetching]);

  return (
    <>
      {isLoading && <p>ça charge</p>}
      {!isLoading && !error && <p>{data.title}</p>}
    </>
  );
}

export default Movie;
