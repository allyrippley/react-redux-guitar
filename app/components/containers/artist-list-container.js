import React from 'react';
import { connect } from 'react-redux';
import ArtistList from '../views/artist-list';
import * as artistApi from '../../api/artist-api';
import store from '../../store';
import { loadSearchLayout } from '../../actions/search-layout-actions';

const ArtistListContainer = React.createClass({

  componentDidMount: function() {
    artistApi.getArtists();
    store.dispatch(loadSearchLayout('artists', 'Artist Results'));
  },

  render: function() {
    return (
      <ArtistList artists={this.props.artists} deleteArtist={artistApi.deleteArtist} />
    );
  }

});

const mapStateToProps = function(store) {
  return {
    artists: store.artistState.artists
  };
};

export default connect(mapStateToProps)(ArtistListContainer);
