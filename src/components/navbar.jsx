import images from "../constants/images";
import { useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();
  return (
    <>
      <nav className="bg-gray-900 border-b border-gray-800 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-3xl font-bold text-white" onClick={() => navigate('/')}>
              Movies<span className="text-red-600">Hub</span>
            </h1>
          </div>

          <div className="flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
              onClick={() => navigate('/')}
            >
              Home
            </a>
            <a
              href="#movies"
              className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
               onClick={() => navigate('/movies')}
            >
              Movies
            </a>
          </div>

          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center cursor-pointer hover:ring-2 hover:ring-red-600 transition-all duration-200">
              <img src={images.ProfilePic} alt=""  className="rounded-full"/>
            </div>
            <div className="absolute top-0 right-0 w-3 h-3 bg-green-500 border-2 border-gray-900 rounded-full"></div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
