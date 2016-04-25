import axios from 'axios';
import store from '../store';
import { getArtistsSuccess, deleteArtistSuccess, artistProfileSuccess } from '../actions/artist-actions';

/**
 * Get all planets
 */

export function getArtists() {
  return axios.get('http://localhost:3001/artists')
    .then(response => {
      store.dispatch(getArtistsSuccess(response.data));
      return response;
    });
}

/**
 * Search planets
 */

export function searchArtists(query = '') {
  return axios.get('http://localhost:3001/artists?q='+ query)
    .then(response => {
      store.dispatch(getArtistsSuccess(response.data));
      return response;
    });
}

/**
 * Delete a planet
 */

export function deleteArtist(artistId) {
  return axios.delete('http://localhost:3001/artists/' + artistId)
    .then(response => {
      store.dispatch(deleteArtistSuccess(artistId));
      return response;
    });
}

/**
 * getProfile() is much more complex because it has to make
 * three XHR requests to get all the profile info.
 */

export function getProfile(artistId) {

  // Start with an empty profile object and build it up
  // from multiple XHR requests.
  let profile = {};

  // Get the planet data from our local database.
  return axios.get('http://localhost:3001/artists/' + artistId)
    .then(response => {

      let artist = response.data;
      profile.name = artist.name;
      profile.desc = !artist.desc ? 'No description available' : artist.desc;

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
