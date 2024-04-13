import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import MovieDetails from "./Components/MovieDetails";
import CastDetails from "./Components/CastDetail";
import Genres from "./Components/Genres";
import GenreList from "./Components/GenreList";

import Navbar from "./Components/Pages/Navbar";
import Type from "./Components/Pages/Type";
import Footer from "./Components/Pages/Footer";

function App() {
  return (
    <div className="App scrollbar-hide">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/:id" element={<MovieDetails />} />
          <Route path="/castDetails/:castId" element={<CastDetails />} />
          <Route path="/genres" element={<Genres />} />
          <Route path="/type" element={<Type />} />
          <Route path="/genres/:genreId" element={<GenreList />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
