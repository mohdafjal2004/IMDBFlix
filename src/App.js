import "./App.css";

import Categories from "./Components/Genres/Popular";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import MovieDetails from "./Components/MovieDetails";
import CastDetails from "./Components/CastDetail";
import TopRated from "./Components/Genres/TopRated";
import Upcoming from "./Components/Genres/Upcoming";
import Genres from "./Components/Genres";
import GenreList from "./Components/GenreList";
import Romance from "./Components/Genres/Romance";
import Horror from "./Components/Genres/Horror";
import Comedy from "./Components/Genres/Comedy";
import TvMovies from "./Components/Genres/TvMovies";
import Action from "./Components/Genres/Actions";
import Trending from "./Components/Genres/Trending";
import Animated from "./Components/Genres/Animated";
import Drama from "./Components/Genres/Drama";



function App() {
  return (
    <div className="App bg-black">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/" element={<Categories />} />
          <Route path="/romance" element={<Romance />} />
          <Route path="/horror" element={<Horror />} />
          <Route path="/comedy" element={<Comedy />} />
          <Route path="/animated" element={<Animated />} />
          <Route path="/drama" element={<Drama />} />
          <Route path="/tv" element={<TvMovies />} />
          <Route path="/" element={<Trending />} />
          <Route path="/top-rated" element={<TopRated />} />
          <Route path="/action" element={<Action />} />
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
