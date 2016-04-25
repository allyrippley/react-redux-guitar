import axios from 'axios';
import store from '../store';
import { getTracksSuccess, deleteTrackSuccess, trackProfileSuccess } from '../actions/track-actions';

/**
 * Get all planets
 */

export function getTracks() {
  return axios.get('http://localhost:3001/tracks')
    .then(response => {
      store.dispatch(getTracksSuccess(response.data));
      return response;
    });
}

/**
 * Search planets
 */

export function searchTracks(query = '') {
  return axios.get('http://localhost:3001/tracks?q='+ query)
    .then(response => {
      store.dispatch(getTracksSuccess(response.data));
      return response;
    });
}

/**
 * Delete a planet
 */

export function deleteTrack(trackId) {
  return axios.delete('http://localhost:3001/tracks/' + trackId)
    .then(response => {
      store.dispatch(deleteTrackSuccess(trackId));
      return response;
    });
}

/**
 * getProfile() is much more complex because it has to make
 * three XHR requests to get all the profile info.
 */

export function getProfile(trackId) {

  // Start with an empty profile object and build it up
  // from multiple XHR requests.
  let profile = {};

  // Get the planet data from our local database.
  return axios.get('http://localhost:3001/tracks/' + trackId)
    .then(response => {

      let track = response.data;
      profile.name = track.name;
      profile.desc = !track.desc ? 'No description available' : track.desc;

      // Then use the github attribute from the previous request to
      // sent two XHR requests to GitHub's API. The first for their
      // general planet info, and the second for their repos.
      // return Promise.all([
      //   axios.get('https://api.github.com/planets/' + planet.github),
      //   axios.get('https://api.github.com/planets/' + planet.github + '/repos')
      // ]).then(results => {
      //
      //   let githubProfile = results[0].data;
      //   let githubRepos = results[1].data;
      //
      //   profile.imageUrl = githubProfile.avatar_url;
      //   profile.repos = githubRepos;
      //
      //   store.dispatch(planetProfileSuccess(profile));
      //
      //   return;
      //
      // });

    });

}
