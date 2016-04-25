import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

// Layouts
import MainLayout from './components/layouts/main-layout';
import SearchLayoutContainer from './components/containers/search-layout-container';

// Pages
import Home from './components/home';
import PlanetListContainer from './components/containers/planet-list-container';
import ArtistListContainer from './components/containers/artist-list-container';
import TrackListContainer from './components/containers/track-list-container';
import PlanetProfileContainer from './components/containers/planet-profile-container';
import WidgetListContainer from './components/containers/widget-list-container';

export default (
  <Router history={browserHistory}>
    <Route component={MainLayout}>
      <Route path="/" component={Home} />

        <Route path="planets">
          <Route component={SearchLayoutContainer}>
            <IndexRoute component={PlanetListContainer} />
          </Route>
          <Route path=":planetId" component={PlanetProfileContainer} />
        </Route>

        <Route path="widgets">
          <Route component={SearchLayoutContainer}>
            <IndexRoute component={WidgetListContainer} />
          </Route>
        </Route>

        <Route path="artists">
          <Route component={SearchLayoutContainer}>
            <IndexRoute component={ArtistListContainer} />
          </Route>
        </Route>

        <Route path="tracks">
          <Route component={SearchLayoutContainer}>
            <IndexRoute component={TrackListContainer} />
          </Route>
        </Route>


    </Route>
  </Router>
);
