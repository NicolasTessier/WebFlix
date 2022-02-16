import Input from "../components/Input";
import MoviesList from "../components/MoviesList";
import "./Home.css";
import data from "../data.json";

function Home() {
  const movies = data.movies;

  return (
    <div className="home">
      <h1 className="title">
        Bienvenue sur WebFlix
        <span role="img" aria-label="people">
          🎥‍
        </span>
      </h1>
      <Input />
      <MoviesList data={movies} />
    </div>
  );
}

export default Home;
