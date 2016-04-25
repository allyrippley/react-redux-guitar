import React from 'react';
import { Link } from 'react-router';

// Using "Stateless Functional Components"
export default function(props) {
  return (
    <div className="data-list">

      {props.artists.map(artist => {

        return (
          <div key={artist.id} className="data-list-item">
            <div className="details">
              <Link to={'/artist/' + artist.id}>{artist.name}</Link>
            </div>
          </div>
        );

      })}

    </div>
  );
}
