import Input from "../components/Input";
import MoviesList from "../components/MoviesList";
import "./Home.css";
import { useCallback, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchMovies } from "../ApiHelper";
import Spinner from "../components/Spinner";
import Chip from "../components/Chip";

const yearFilter = [
  new Date().getFullYear().toString(),
  (new Date().getFullYear() - 1).toString(),
  (new Date().getFullYear() - 2).toString(),
];

function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState(searchParams.get("q") || "");
  const [year, setYear] = useState("");

  const { data, isLoading, error } = useQuery(
    ["movies", value, year],
    () => fetchMovies(value, year),
    { cacheTime: 0 }
  );

  const onChange = useCallback(
    (event) => {
      setValue(event.target.value);
      setSearchParams(event.target.value ? { q: event.target.value } : {});
    },
    [setSearchParams]
  );

  const onPress = (date) => {
    if (year === date) {
      setYear("");
    } else {
      setYear(date);
    }
  };
  return (
    <div className="home">
      <h1 className="title">
        Bienvenue sur WebFlix
        <span role="img" aria-label="camera">
          🎥‍
        </span>
      </h1>
      <Input value={value} onChange={onChange} />
      {value && (
        <div className="filtersDiv">
          <p>Affiner ma recherche :</p>
          <div className="filters">
            {yearFilter.map((date) => (
              <Chip
                key={date}
                label={date.toString()}
                onPress={() => onPress(date)}
                style={date === year ? "enabled" : ""}
              />
            ))}
          </div>
        </div>
      )}
      {isLoading && <Spinner />}
      {error && <p>{error}</p>}
      {!isLoading && !error && (
        <MoviesList data={data?.results} horizontal={false} />
      )}
    </div>
  );
}

export default Home;
