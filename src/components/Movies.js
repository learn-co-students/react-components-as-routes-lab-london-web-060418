import React from 'react';
import { movies } from '../data';

const Movies = () => {

  const movieCards = movies.map( movie => (
    <div>
      {movie.title} -- {movie.time}
      <ul>
        { movie.genres.map( genre => <li>{genre}</li> ) }
      </ul>
    </div>
  ))

  return (
    <div>
        <h1>Movies Page</h1>
        {movieCards}
    </div>
  );
};

export default Movies;
