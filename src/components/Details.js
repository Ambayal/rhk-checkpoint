import React from 'react';
import { useParams } from 'react-router-dom';
import MovieList from './MovieList';
const Details = () => {
  const { id } = useParams();
  const found= MovieList.find((movie) => movie.id === +id);

  
  // Fetch movie details and trailer based on the id
  return (
    <>
    <div>
      <h1>Movie Trailer</h1>
      <iframe
        title="movie-trailer"
        width="560"
        height="315"
        src={found?.trailer}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
    </>
  );
};

export default Details;
