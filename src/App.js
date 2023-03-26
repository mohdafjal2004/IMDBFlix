import "./App.css";
import Categories from "./Components/Categories";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import MovieDetails from "./Components/MovieDetails";
import CastDetails from "./Components/CastDetail";

function App() {
  return (
    <div className="App">
      
      Hello React
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category" element={<Categories />} />
          <Route path="/category/:id" element={<MovieDetails />} />
          <Route path="/castDetails/:castId" element = {<CastDetails/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
