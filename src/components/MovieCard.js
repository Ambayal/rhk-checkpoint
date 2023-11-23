import React, {useState} from 'react';
import MovieList from './MovieList';
 
const MovieCard = () => {
    const[Movie,setMovie]=useState(MovieList)
    const filterMovies = (e) => {
        const search=e.target.value.toLowerCase();
      const filterd=Movie.filter((filtre)=>{
        const filteredtitle=filtre.Title.toLowerCase().includes(search);
        const filteredrating=filtre.rating.toString().toLowerCase().includes(search);
        return filteredtitle||filteredrating
      })
      setMovie(filterd)
      };
    return (
        <>
      <input type="search" onChange={function(e){filterMovies(e)}}  placeholder='search' />
    <div className='main'>
        <div className="movie-card">
            {
         Movie.map((movie) => (
        <div>
            <img src={movie.Poster} alt={movie.title} />
            <h3>{movie.Title}</h3>
            <p> {movie.description} </p>
            <h6>Rating : {movie.rating} </h6>
        </div>
    ))
}
</div>
    </div>
         </>
         
        

    );
};

export default MovieCard;
