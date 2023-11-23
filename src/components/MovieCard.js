import React, { useState } from 'react';
import MovieList from './MovieList';
import { Link } from 'react-router-dom';

const MovieCard = () => {
  const [Movie, setMovie] = useState(MovieList)
  const filterMovies = (e) => {
    const search = e.target.value.toLowerCase();
    const filterd = Movie.filter((filtre) => {
      const filteredtitle = filtre.Title.toLowerCase().includes(search);
      const filteredrating = filtre.rating.toString().toLowerCase().includes(search);
      return filteredtitle || filteredrating
    })
    setMovie(filterd)
  };
  return (
    <>
      <input type="search" onChange={function (e) { filterMovies(e) }} placeholder='search' />
      <div className='main'>
        <div className="movie-card">
          {MovieList.map((movie) => (
            <div key={movie.id}>
              <Link to={`movie/${movie.id}`}>
                <img src={movie.Poster} alt={movie.title} />
                <h3>{movie.Title}</h3>
                <p>{movie.description}</p>
                <h6>Rating: {movie.rating}</h6>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>



  );
};

export default MovieCard;
