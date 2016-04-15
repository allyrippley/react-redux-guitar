import React from 'react';
import { connect } from 'react-redux';
import PlanetList from '../views/planet-list';
import * as planetApi from '../../api/planet-api';
import store from '../../store';
import { loadSearchLayout } from '../../actions/search-layout-actions';

const PlanetListContainer = React.createClass({

  componentDidMount: function() {
    planetApi.getPlanets();
    store.dispatch(loadSearchLayout('planets', 'Planet Results'));
  },

  render: function() {
    return (
      <PlanetList planets={this.props.planets} deletePlanet={planetApi.deletePlanet} />
    );
  }

});

const mapStateToProps = function(store) {
  return {
    planets: store.planetState.planets
  };
};

export default connect(mapStateToProps)(PlanetListContainer);
