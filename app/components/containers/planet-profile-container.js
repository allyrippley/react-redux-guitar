import React from 'react';
import { connect } from 'react-redux';
import PlanetProfile from '../views/planet-profile';
import * as planetApi from '../../api/planet-api';

const PlanetProfileContainer = React.createClass({

  componentDidMount: function() {
    let planetId = this.props.params.planetId
    planetApi.getProfile(planetId)
  },

  render: function() {
    return (
      <PlanetProfile {...this.props.profile} />
    );
  }

});

const mapStateToProps = function(store) {
  return {
    profile: store.planetState.planetProfile
  };
};

export default connect(mapStateToProps)(PlanetProfileContainer);
