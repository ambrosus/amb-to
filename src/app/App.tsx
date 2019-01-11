import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import {AssetRedirect, Footer} from './components';
import Asset from './containers/Asset';
import Event from './containers/Event';
import Home from './containers/Home';

import './App.scss';

class App extends React.Component<any, any> {
  public state = {
    hideHeader: false,
  };

  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <div className='App'>

        {/* render app */}
        <main className='Main'>
          <Switch>
            {/* all app routes */}
            <Route exact path='/:assetId/events/:eventId' component={Event} />
            <Route exact path='/:assetId' component={AssetRedirect(Asset)} />
            <Route path='*' component={Home} />
          </Switch>
        </main>

        {/* render footer */}
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
