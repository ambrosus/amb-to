import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

import './App.scss';
import Header from './components/header/Header';
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

  public componentDidMount() {
    this.routeChanged();
  }

  public componentDidUpdate(prevProps: any) {
    if (this.props.location !== prevProps.location) {
      this.routeChanged();
    }
  }

  private routeChanged() {
    this._class = location.pathname === '/' ? 'todo' : location.pathname.split('/')[1];
    document.body.className = '';
    document.body.classList.add(this._class);
    document.body.classList.add('page-loaded');
    this.setState({ hideHeader: ['login'].indexOf(this._class) > -1 });
  }

  public render() {
    return (
      <div className='App'>
        {/* {!this.state.hideHeader ? <Header /> : null} */}
        {/* render header */}


        {/* render app */}
        <main className='Main'>
          <Switch>
            {/* all app routes */}
            <Route exact path='/:assetId/events/:eventId' component={Event} />
            <Route exact path='/:assetId' component={AssetRedirect(Asset)} />
            <Route path="*" component={Home} />
          </Switch>
        </main>

        {/* render footer */}
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
