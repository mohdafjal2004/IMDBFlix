import "./App.css";
import Categories from "./Components/Popular";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import MovieDetails from "./Components/MovieDetails";
import CastDetails from "./Components/CastDetail";
import TopRated from "./Components/TopRated";
import Upcoming from "./Components/Upcoming";
import Genres from "./Components/Genres";
import GenreList from "./Components/GenreList";

function App() {
  return (
    <div className="App">
      Hello React
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/popular" element={<Categories />} />
          <Route path="/top-rated" element={<TopRated />} />
          <Route path="/up-coming" element={<Upcoming />} />
          <Route path="/category/:id" element={<MovieDetails />} />
          <Route path="/castDetails/:castId" element={<CastDetails />} />
          <Route path="/genres" element={<Genres />} />
          <Route path="/genres/:genreId" element={<GenreList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
