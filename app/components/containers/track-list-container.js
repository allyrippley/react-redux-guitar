import React from 'react';
import { connect } from 'react-redux';
import TrackList from '../views/track-list';
import * as trackApi from '../../api/track-api';
import store from '../../store';
import { loadSearchLayout } from '../../actions/search-layout-actions';

const TrackListContainer = React.createClass({

  componentDidMount: function() {
    trackApi.getTracks();
    store.dispatch(loadSearchLayout('tracks', 'Track Results'));
  },

  render: function() {
    return (
      <TrackList tracks={this.props.tracks} deleteTrack={trackApi.deleteTrack} />
    );
  }

});

const mapStateToProps = function(store) {
  return {
    tracks: store.trackState.tracks
  };
};

export default connect(mapStateToProps)(TrackListContainer);
