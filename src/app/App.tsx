import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import './App.scss';
import Footer from './components/footer/Footer';
import Asset from './containers/Asset/Asset';
import Event from './containers/Event';
import Home from './containers/Home/Home';
import AssetRedirect from './containers/Asset/assetRedirect';

class App extends React.Component<any, any> {
  public state = {
    hideHeader: false,
  };
  private _class = '';

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
