import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import Movie from "./screens/Movie";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<Movie />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
