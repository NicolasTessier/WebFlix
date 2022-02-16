import Input from "../components/Input";
import MoviesList from "../components/MoviesList";
import "./Home.css";
import data from "../data.json";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams();
    if (query) {
      params.append("q", query);
    } else {
      params.delete("q");
    }
    navigate({ search: params.toString() });
  }, [query, navigate]);

  const [value, setValue] = useState("");
  const onChange = (event) => {
    setQuery(event.target.value);
    setValue(event.target.value);
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
