import { combineReducers } from 'redux';

// Reducers
import artistReducer from './artist-reducer';
import trackReducer from './track-reducer';
import planetReducer from './planet-reducer';
import widgetReducer from './widget-reducer';
import searchLayoutReducer from './search-layout-reducer';

// Combine Reducers
var reducers = combineReducers({
    artistState: artistReducer,
    trackState: trackReducer,
    planetState: planetReducer,
    widgetState: widgetReducer,
    searchLayoutState: searchLayoutReducer
});

export default reducers;
