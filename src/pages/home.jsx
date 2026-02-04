import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";
import { FaPlay, FaFilm, FaTv, FaStar } from "react-icons/fa";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-16">
          <div className="text-center">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
              Welcome to <span className="text-red-600">MoviesHub</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              Your Ultimate Destination for Movies & Series
            </p>

            <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12">
              Discover an incredible collection of the greatest movies and TV series ever made. 
              From timeless classics to modern masterpieces, we bring you the best entertainment 
              all in one place. Explore critically acclaimed films, binge-worthy series, and 
              hidden gems waiting to be discovered.
            </p>

            <button
              onClick={() => navigate('/movies')}
              className="bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-10 py-4 rounded-lg transition-all duration-300 hover:scale-105 flex items-center gap-3 mx-auto shadow-lg shadow-red-900/50"
            >
              <FaPlay /> View Our Collection
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-8 rounded-lg text-center hover:bg-gray-800 transition-all duration-300 hover:scale-105">
              <div className="flex justify-center mb-4">
                <FaFilm className="text-red-600 text-5xl" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Blockbuster Movies
              </h3>
              <p className="text-gray-400">
                Access a vast library of award-winning movies from legendary directors 
                like Scorsese, Fincher, and the Coen Brothers.
              </p>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg text-center hover:bg-gray-800 transition-all duration-300 hover:scale-105">
              <div className="flex justify-center mb-4">
                <FaTv className="text-red-600 text-5xl" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Must-Watch Series
              </h3>
              <p className="text-gray-400">
                Dive into critically acclaimed TV series that have captivated audiences 
                worldwide with gripping stories and unforgettable characters.
              </p>
            </div>
            <div className="bg-gray-900 p-8 rounded-lg text-center hover:bg-gray-800 transition-all duration-300 hover:scale-105">
              <div className="flex justify-center mb-4">
                <FaStar className="text-red-600 text-5xl" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Top Rated Content
              </h3>
              <p className="text-gray-400">
                Explore our curated collection featuring only the highest-rated films 
                and series based on critic reviews and audience scores.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="bg-gradient-to-r from-red-900/20 to-gray-900/20 backdrop-blur-sm rounded-2xl p-12 border border-red-900/30">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <h4 className="text-5xl font-bold text-red-600 mb-2">12+</h4>
                <p className="text-gray-300 text-lg">Premium Titles</p>
              </div>
              <div>
                <h4 className="text-5xl font-bold text-red-600 mb-2">8.0+</h4>
                <p className="text-gray-300 text-lg">Average Rating</p>
              </div>
              <div>
                <h4 className="text-5xl font-bold text-red-600 mb-2">100%</h4>
                <p className="text-gray-300 text-lg">Quality Content</p>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Watching?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Join thousands of movie lovers and explore our collection today
          </p>
          <button
            onClick={() => navigate('/movies')}
            className="bg-white hover:bg-gray-100 text-gray-900 font-bold text-lg px-10 py-4 rounded-lg transition-all duration-300 hover:scale-105 inline-flex items-center gap-3 shadow-lg"
          >
            Explore Movies Now <FaPlay />
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;