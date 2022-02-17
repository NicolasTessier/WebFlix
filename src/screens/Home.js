import Input from "../components/Input";
import MoviesList from "../components/MoviesList";
import "./Home.css";
import data from "../data.json";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState(searchParams.get("q"));
  const onChange = (event) => {
    setValue(event.target.value);
    setSearchParams(event.target.value ? { q: event.target.value } : {});
  };
  const movies = data.movies.filter((movie) =>
    movie.title.match(new RegExp(value, "i"))
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
      <MoviesList data={movies} />
    </div>
  );
}

export default Home;
