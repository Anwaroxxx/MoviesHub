import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";
import { MoviesContext } from "../context/filmContext";
import { FaStar } from "react-icons/fa";

const Movies = () => {
  const { movies, Images } = useContext(MoviesContext);
  const navigate = useNavigate();
  
  const handleMovieClick = (movieId) => {
    navigate(`/movieDetails/${movieId}`);
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-950 py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-8">
            Featured Movies & Series
          </h2>

          <div className="grid grid-cols-6 gap-6">
            {movies.map((movie) => (
              <div
                key={movie.id}
                onClick={() => handleMovieClick(movie.id)}
                className="bg-gray-900 rounded-lg overflow-hidden hover:scale-105 hover:shadow-2xl hover:shadow-red-900/20 transition-all duration-300 cursor-pointer group"
              >
                <div className="relative">
                  <img
                    src={Images[movie.poster]}
                    alt={movie.title}
                    className="w-full h-60 object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-yellow-500 text-gray-900 px-2 py-1 rounded-md font-bold text-sm flex items-center gap-1">
                    <FaStar /> {movie.rating}
                  </div>
                  <div className="absolute top-2 left-2 bg-gray-800/80 text-white px-2 py-1 rounded-md text-xs font-semibold">
                    {movie.year}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-white font-semibold text-base mb-1 group-hover:text-red-500 transition-colors truncate">
                    {movie.title}
                  </h3>
                  <p className="text-gray-400 text-xs mb-2">{movie.duration}</p>
                  <div className="flex flex-wrap gap-1">
                    {movie.genre.slice(0, 2).map((g, index) => (
                      <span
                        key={index}
                        className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded"
                      >
                        {g}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Movies;