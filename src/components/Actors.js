import React from 'react';
import { actors } from '../data';

const Actors = () => {
  const actorCards = actors.map( actor => (
    <div>
      {actor.name}
      <ul>
        { actor.movies.map( movie => <li>{movie}</li> ) }
      </ul>
    </div>
  ))

  return (
    <div>
        <h1>Actors Page</h1>
        {actorCards}
    </div>
  );
};

export default Actors;
