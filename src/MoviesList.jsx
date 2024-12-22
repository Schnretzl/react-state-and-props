import React, { useState } from "react";

const MoviesList = () => {
    // Task 1: Initializing and Displaying a List
    const [movies, setMovies] = useState([{title: 'Tremors', details: 'A horror movie about giant worms', showDetails: false, genre: 'Horror'},
                                         {title: 'Jurassic Park', details: 'A movie about dinosaurs', showDetails: false, genre: 'Action'},
                                         {title: 'Lord of the Rings', details: 'A movie about a ring', showDetails: false, genre: 'Fantasy'}]);
    const [showActionOnly, setShowActionOnly] = useState(false);

    const toggleDetails = (index) => {
        setMovies(movies.map((movie, i) => 
            i === index ? { ...movie, showDetails: !movie.showDetails } : movie
        ));
    };

    // Task 3: Implementing Movie Removal
    const removeMovie = (index) => {
        setMovies(movies.filter((_, i) => i !== index));
    };

    // Task 4: Toggling List View
    const toggleShowActionOnly = () => {
        setShowActionOnly(!showActionOnly);
    };

    const filteredMovies = showActionOnly ? movies.filter(movie => movie.genre === 'Action') : movies;

    // Task 2: Conditional Rendering of Movie Details
    return (
        <div>
            <h1>Movies List</h1>
            <button onClick={toggleShowActionOnly}>
                {showActionOnly ? 'Show All Movies' : 'Show Action Movies Only'}
            </button>
            <ul>
                {filteredMovies.map((movie, index) => (
                    <li key={index}>
                        <p onClick={() => toggleDetails(index)}>{movie.title}<button onClick={() => removeMovie(index)}>Remove</button></p>
                        {movie.showDetails && <p>{movie.details}</p>}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MoviesList;
