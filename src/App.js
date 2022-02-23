import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import Movie from "./screens/Movie";
import Header from "./components/Header";
import Favourites from "./screens/Favourites";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/movie/:id" element={<Movie />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
