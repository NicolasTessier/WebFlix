import Input from "../components/Input";
import MoviesList from "../components/MoviesList";
import "./Home.css";
import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Chip from "../components/Chip";
import { useDispatch, useSelector } from "react-redux";

const yearFilter = [
  new Date().getFullYear().toString(),
  (new Date().getFullYear() - 1).toString(),
  (new Date().getFullYear() - 2).toString(),
];

function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState(searchParams.get("q") || "");
  const [year, setYear] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "FETCH_MOVIES", value: value, year: year });
  }, [dispatch, value, year]);

  const movies = useSelector((state) => state.movies);

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
      <MoviesList data={movies} horizontal={false} />
    </div>
  );
}

export default Home;
