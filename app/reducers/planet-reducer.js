import * as types from '../actions/action-types';
import _ from 'lodash';

const initialState = {
  planets: [],
  planetProfile: {
    repos: []
  }
};

const planetReducer = function(state = initialState, action) {

  switch(action.type) {

    case types.GET_PLANETS_SUCCESS:
      return Object.assign({}, state, { planets: action.planets });

    case types.DELETE_PLANET_SUCCESS:

      // Use lodash to create a new planet array without the planet we want to remove
      const newPlanets = _.filter(state.planets, planet => planet.id != action.planetId);
      return Object.assign({}, state, { planets: newPlanets });

    case types.PLANET_PROFILE_SUCCESS:
      return Object.assign({}, state, { planetProfile: action.planetProfile });

  }

  return state;

}

export default planetReducer;
