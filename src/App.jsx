import { Route, Routes } from 'react-router-dom';
import Movie from "./pages/Movie";
import Serie from "./pages/Serie";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import Genre from "./pages/Genre";
import Home from './pages/Home';
import Auth from './pages/Auth/Auth';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route path="/browse" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/series" element={<Series />} />
      <Route path="/genre" element={<Genre />} />
      <Route path="/series/:id" element={<Serie />} />
      <Route path="/movie/:id" element={<Movie />} />
      <Route path="/genre/:genreName" element={<Genre />} />
    </Routes>
  )
}
