import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './pages/home'
import Movies from './pages/movies'
import MovieDetails from './pages/movieDetails'
import { MoviesProvider } from './context/filmContext'

function App() {

  return (
    <>
      <MoviesProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movieDetails/:id" element={<MovieDetails />} />
          </Routes>
        </BrowserRouter>
      </MoviesProvider>
    </>
  )
}

export default App