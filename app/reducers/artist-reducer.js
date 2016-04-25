import * as types from '../actions/action-types';
import _ from 'lodash';

const initialState = {
  artists: [],
  artistProfile: {
    repos: []
  }
};

const artistReducer = function(state = initialState, action) {

  switch(action.type) {

    case types.GET_ARTISTS_SUCCESS:
      return Object.assign({}, state, { artists: action.artists });

    case types.DELETE_ARTIST_SUCCESS:

      // Use lodash to create a new artist array without the artist we want to remove
      const newArtists = _.filter(state.artists, artist => artist.id != action.artistId);
      return Object.assign({}, state, { artists: newArtists });

    case types.ARTIST_PROFILE_SUCCESS:
      return Object.assign({}, state, { artistProfile: action.artistProfile });

  }

  return state;

}

export default artistReducer;
