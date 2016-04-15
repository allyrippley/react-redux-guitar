import * as types from '../actions/action-types';

export function getPlanetsSuccess(planets) {
  return {
    type: types.GET_PLANETS_SUCCESS,
    planets
  };
}

export function deletePlanetSuccess(planetId) {
  return {
    type: types.DELETE_PLANET_SUCCESS,
    planetId
  };
}

export function planetProfileSuccess(planetProfile) {
  return {
    type: types.PLANET_PROFILE_SUCCESS,
    planetProfile
  };
}
