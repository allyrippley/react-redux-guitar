import * as types from '../actions/action-types';

export function getTracksSuccess(tracks) {
  return {
    type: types.GET_TRACKS_SUCCESS,
    tracks
  };
}

export function deleteTrackSuccess(trackId) {
  return {
    type: types.DELETE_TRACK_SUCCESS,
    trackId
  };
}

export function trackProfileSuccess(trackProfile) {
  return {
    type: types.TRACK_PROFILE_SUCCESS,
    trackProfile
  };
}
