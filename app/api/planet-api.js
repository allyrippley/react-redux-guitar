import axios from 'axios';
import store from '../store';
import { getPlanetsSuccess, deletePlanetSuccess, planetProfileSuccess } from '../actions/planet-actions';

/**
 * Get all planets
 */

export function getPlanets() {
  return axios.get('http://localhost:3001/planets')
    .then(response => {
      store.dispatch(getPlanetsSuccess(response.data));
      return response;
    });
}

/**
 * Search planets
 */

export function searchPlanets(query = '') {
  return axios.get('http://localhost:3001/planets?q='+ query)
    .then(response => {
      store.dispatch(getPlanetsSuccess(response.data));
      return response;
    });
}

/**
 * Delete a planet
 */

export function deletePlanet(planetId) {
  return axios.delete('http://localhost:3001/planets/' + planetId)
    .then(response => {
      store.dispatch(deletePlanetSuccess(planetId));
      return response;
    });
}

/**
 * getProfile() is much more complex because it has to make
 * three XHR requests to get all the profile info.
 */

export function getProfile(planetId) {

  // Start with an empty profile object and build it up
  // from multiple XHR requests.
  let profile = {};

  // Get the planet data from our local database.
  return axios.get('http://localhost:3001/planets/' + planetId)
    .then(response => {

      let planet = response.data;
      profile.name = planet.name;
      profile.desc = !planet.desc ? 'No description available' : planet.desc;

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
