# 🎬 MoviesHub

<div align="center">
  
![MoviesHub Banner](https://img.shields.io/badge/MoviesHub-Your%20Ultimate%20Movie%20Destination-red?style=for-the-badge&logo=youtube&logoColor=white)

[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://www.javascript.com/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

**A modern, responsive movie catalog application built with React and Tailwind CSS**

[Demo](#-features) • [Installation](#-installation) • [Usage](#-usage) • [Tech Stack](#-tech-stack)

</div>

---

## 📖 About The Project

MoviesHub is a sleek, modern web application that showcases a curated collection of critically acclaimed movies and TV series. Built with React and styled with Tailwind CSS, it offers an immersive browsing experience with detailed movie information, embedded trailers, and a beautiful, responsive UI.

### ✨ Key Highlights

- 🎯 **Curated Collection** - Hand-picked selection of iconic movies and series
- 🎥 **Embedded Trailers** - Watch trailers directly within the app
- 📱 **Fully Responsive** - Optimized for all screen sizes
- ⚡ **Lightning Fast** - Built with Vite for optimal performance
- 🎨 **Modern UI/UX** - Clean, intuitive interface with smooth animations
- 🔍 **Easy Navigation** - Browse movies effortlessly with React Router

---

## 🚀 Features

### 🏠 Landing Page
- Eye-catching hero section with call-to-action
- Feature highlights showcasing key benefits
- Interactive statistics display
- Smooth navigation to movie catalog

### 🎬 Movies Catalog
- Grid layout displaying 6 movies per row
- Movie cards with:
  - High-quality poster images
  - IMDb-style ratings with star icons
  - Release year badges
  - Genre tags
  - Duration information
- Hover effects and smooth transitions
- Click to view detailed information

### 📄 Movie Details Page
- **Two-column layout:**
  - **Left:** Movie poster and complete information
  - **Right:** Embedded YouTube trailer
- Comprehensive movie data:
  - Title, year, duration
  - Director information
  - Genre tags
  - IMDb rating
  - Full plot description
- Action buttons:
  - 🎬 Watch Movie
  - 💾 Download
- Fallback link for restricted trailers
- Back navigation to catalog

### 🧭 Navigation
- Sticky navbar with MoviesHub branding
- Quick access links (Home, Movies, Series, Most Popular)
- Profile indicator with active status dot
- Responsive design

---

## 🛠️ Tech Stack

### Frontend Framework
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

### Styling
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

### Languages
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![JSX](https://img.shields.io/badge/JSX-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![JSON](https://img.shields.io/badge/JSON-000000?style=for-the-badge&logo=json&logoColor=white)

### Build Tool
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

### Icons
![React Icons](https://img.shields.io/badge/React_Icons-E91E63?style=for-the-badge&logo=react&logoColor=white)

### State Management
- **React Context API** - For global state management
- **React Hooks** - useState, useContext, useParams, useNavigate

---

## 📂 Project Structure

```
MoviesHub/
├── public/
├── src/
│   ├── assets/
│   │   └── images/          # Movie poster images
│   ├── components/
│   │   └── navbar.jsx       # Navigation component
│   ├── constants/
│   │   ├── images.js        # Image imports
│   │   └── index.js         # Export aggregator
│   ├── context/
│   │   └── filmContext.jsx  # React Context for movies
│   ├── data/
│   │   └── movies.json      # Movie database
│   ├── pages/
│   │   ├── home.jsx         # Landing page
│   │   ├── movies.jsx       # Movie catalog
│   │   └── movieDetails.jsx # Movie details page
│   ├── App.jsx              # Main app component
│   ├── App.css              # Global styles
│   └── main.jsx             # Entry point
├── .gitignore
├── index.html
├── package.json
├── README.md
├── tailwind.config.js
└── vite.config.js
```

---

## 📦 Installation

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/movieshub.git
   cd movieshub
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

---

## 🎮 Usage

### Running the Application

```bash
# Development mode
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Adding New Movies

Edit `src/data/movies.json`:

```json
{
  "id": "movie-slug",
  "title": "Movie Title",
  "year": 2024,
  "genre": ["Genre1", "Genre2"],
  "rating": 8.5,
  "duration": "120 min",
  "director": "Director Name",
  "description": "Movie description here",
  "poster": "PosterImageName",
  "trailerUrl": "https://www.youtube.com/embed/VIDEO_ID"
}
```

### Adding New Images

1. Place image in `src/assets/images/`
2. Import in `src/constants/images.js`:
   ```javascript
   import NewMoviePic from '../assets/images/newmovie.jpg';
   export default {
     // ... other images
     NewMoviePic
   };
   ```

---

## 🎨 Features Breakdown

### React Context API Implementation

MoviesHub uses React Context to manage global state:

```javascript
// filmContext.jsx
export const MoviesContext = createContext();

export const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState(JsonData);
  const all = { movies, Images, setMovies };
  
  return (
    <MoviesContext.Provider value={all}>
      {children}
    </MoviesContext.Provider>
  );
};
```

### Dynamic Routing

```javascript
// App.jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/movies" element={<Movies />} />
  <Route path="/movieDetails/:id" element={<MovieDetails />} />
</Routes>
```

### Responsive Grid Layout

```javascript
// 6 columns on large screens, responsive on smaller devices
<div className="grid grid-cols-6 gap-6">
  {movies.map((movie) => (
    <MovieCard key={movie.id} movie={movie} />
  ))}
</div>
```

---

## 🌟 Screenshots

### Landing Page
*Eye-catching hero section with clear call-to-action*

### Movie Catalog
*Grid layout showcasing movie collection with ratings and genres*

### Movie Details
*Comprehensive movie information with embedded trailer*

---

## 🤝 Contributing

Contributions are what make the open-source community amazing! Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 👨‍💻 Author

**Your Name**

- GitHub: [@Anwaroxxx](https://github.com/Anwaroxxx)
- LinkedIn: [Your Name](https://linkedin.com/in/Anwar_Azarzou)
- Email: anwar.azarzou.6969@gmail.com

---

<div align="center">

### 🌟 If you like this project, please give it a star! 🌟

Made with ❤️ and React

</div>
