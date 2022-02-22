import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import Movie from "./screens/Movie";
import { QueryClient, QueryClientProvider } from "react-query";
import Header from "./components/Header";
import Favourites from "./screens/Favourites";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
}

export default App;
