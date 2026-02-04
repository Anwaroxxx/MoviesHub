import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";
import { MoviesContext } from "../context/filmContext";
import { FaStar, FaPlay, FaDownload, FaArrowLeft } from "react-icons/fa";

const MovieDetails = () => {
  const { movies, Images } = useContext(MoviesContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movies.find((m) => m.id === id);

  if (!movie) {
    return (
      <>
        <Navbar />
        <div className="h-screen bg-gray-950 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Movie Not Found
            </h2>
            <button
              onClick={() => navigate("/movies")}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg">
              Back to Movies
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="h-screen bg-gray-950 overflow-hidden">
        <div className="h-full px-6 py-4">
          <button
            onClick={() => navigate("/movies")}
            className="flex items-center gap-2 text-gray-400 hover:text-white mb-4 transition-colors"
          >
            <FaArrowLeft /> Back to Movies
          </button>
          <div className="grid grid-cols-2 gap-8 h-[calc(100%-60px)]">
            <div className="flex flex-col">
              <div className="grid grid-cols-3 gap-6 flex-1">
                <div className="col-span-1">
                  <img
                    src={Images[movie.poster]}
                    alt={movie.title}
                    className="w-full h-full object-cover rounded-lg shadow-2xl"
                  />
                </div>

                <div className="col-span-2 flex flex-col justify-between">
                  <div>
                    <h1 className="text-5xl font-bold text-white mb-4">
                      {movie.title}
                    </h1>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex items-center gap-2 bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg font-bold">
                        <FaStar /> {movie.rating}
                      </div>
                      <span className="text-gray-400">{movie.year}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-400">{movie.duration}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {movie.genre.map((g, index) => (
                        <span
                          key={index}
                          className="bg-gray-800 text-gray-300 px-3 py-1 rounded text-sm"
                        >
                          {g}
                        </span>
                      ))}
                    </div>

                    <div className="mb-6">
                      <p className="text-gray-400 text-sm mb-1">Director</p>
                      <p className="text-white text-lg font-semibold">
                        {movie.director}
                      </p>
                    </div>

                    <div className="mb-6">
                      <p className="text-gray-300 leading-relaxed line-clamp-6">
                        {movie.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <button className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-4 rounded-lg flex items-center justify-center gap-3 transition-all duration-300 hover:scale-105 shadow-lg shadow-red-900/50">
                      <FaPlay /> Watch Movie
                    </button>
                    <button className="flex-1 bg-gray-800 hover:bg-gray-700 text-white font-bold px-6 py-4 rounded-lg flex items-center justify-center gap-3 transition-all duration-300 hover:scale-105">
                      <FaDownload /> Download
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg overflow-hidden">
              <div className="h-full flex flex-col">
                <div className="bg-gray-800 px-6 py-3 border-b border-gray-700">
                  <h2 className="text-white text-xl font-bold">
                    Official Trailer
                  </h2>
                </div>
                <div className="flex-1 flex items-center justify-center p-4">
                  <iframe
                    className="w-full h-full rounded-lg"
                    src={movie.trailerUrl}
                    title={`${movie.title} Trailer`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    referrerPolicy="strict-origin-when-cross-origin"
                  ></iframe>
                </div>
                <div className="bg-gray-800 px-6 py-3 border-t border-gray-700">
                  <a
                    href={movie.trailerUrl.replace("/embed/", "/watch?v=")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-500 hover:text-red-400 text-sm flex items-center justify-center gap-2"
                  >
                    <span>Watch on YouTube</span>
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
