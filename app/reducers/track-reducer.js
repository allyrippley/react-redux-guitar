import * as types from '../actions/action-types';
import _ from 'lodash';

const initialState = {
  tracks: [],
  trackProfile: {
    repos: []
  }
};

const trackReducer = function(state = initialState, action) {

  switch(action.type) {

    case types.GET_TRACKS_SUCCESS:
      return Object.assign({}, state, { tracks: action.tracks });

    case types.DELETE_TRACK_SUCCESS:

      // Use lodash to create a new track array without the track we want to remove
      const newTracks = _.filter(state.tracks, track => track.id != action.trackId);
      return Object.assign({}, state, { tracks: newTracks });

    case types.TRACK_PROFILE_SUCCESS:
      return Object.assign({}, state, { trackProfile: action.trackProfile });

  }

  return state;

}

export default trackReducer;
