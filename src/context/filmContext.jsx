import { createContext, useState } from "react";
import { JsonData, Images } from "../constants";

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