import React from 'react';
import { Link } from 'react-router';

// Using "Stateless Functional Components"
export default function(props) {
  return (
    <div className="data-list">

      {props.tracks.map(track => {

        return (
          <div key={track.id} className="data-list-item">
            <div className="details">
              <Link to={'/track/' + track.id}>{track.name}</Link>
            </div>
          </div>
        );

      })}

    </div>
  );
}
