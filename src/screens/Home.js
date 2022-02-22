import Input from "../components/Input";
import MoviesList from "../components/MoviesList";
import "./Home.css";
import { useCallback, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchMovies } from "../ApiHelper";
import Spinner from "../components/Spinner";

function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState(searchParams.get("q") || "");

  const { data, isLoading, error } = useQuery(
    ["movies", value],
    () => fetchMovies(value),
    { cacheTime: 0 }
  );

  const onChange = useCallback(
    (event) => {
      setValue(event.target.value);
      setSearchParams(event.target.value ? { q: event.target.value } : {});
    },
    [setSearchParams]
  );

  return (
    <div className="home">
      <h1 className="title">
        Bienvenue sur WebFlix
        <span role="img" aria-label="camera">
          🎥‍
        </span>
      </h1>
      <Input value={value} onChange={onChange} />
      {isLoading && <Spinner />}
      {error && <p>{error}</p>}
      {!isLoading && !error && (
        <MoviesList data={data?.results} horizontal={false} />
      )}
    </div>
  );
}

export default Home;
