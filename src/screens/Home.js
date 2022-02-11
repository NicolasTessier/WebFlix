import Input from "../components/Input";
import FilmsList from "../components/FilmsList";

function Home() {
  return (
    <div>
      <h1>
        Bienvenue sur WebFlix
        <span role="img" aria-label="people">
          🎥‍
        </span>
      </h1>
      <Input />
      <FilmsList />
    </div>
  );
}

export default Home;
