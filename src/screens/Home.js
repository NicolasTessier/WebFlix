import Input from "../components/Input";
import MoviesList from "../components/MoviesList";
import "./Home.css";
import { useCallback, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchMovies } from "../ApiHelper";

function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState(searchParams.get("q") || "");

  const { data, isLoading, error } = useQuery("movies", () =>
    fetchMovies(value)
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
        <span role="img" aria-label="people">
          🎥‍
        </span>
      </h1>
      <Input value={value} onChange={onChange} />
      {isLoading && <p>ça charge</p>}
      {error && <p>{error}</p>}
      {!isLoading && !error && <MoviesList data={data?.results} />}
    </div>
  );
}

export default Home;
