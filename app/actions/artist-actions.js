import * as types from '../actions/action-types';

export function getArtistsSuccess(artists) {
  return {
    type: types.GET_ARTISTS_SUCCESS,
    artists
  };
}

export function deleteArtistSuccess(artistId) {
  return {
    type: types.DELETE_ARTIST_SUCCESS,
    artistId
  };
}

export function artistProfileSuccess(artistProfile) {
  return {
    type: types.ARTIST_PROFILE_SUCCESS,
    artistProfile
  };
}
