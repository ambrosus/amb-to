import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

import './App.scss';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import AuthService from './services/auth.service';

import Login from './containers/login/Login';
import Settings from './containers/settings/Settings';
import Home from './containers/home/Home';
import Asset from './containers/Asset/Asset';
import Search from './containers/Search/Search';
import AssetRedirect from './containers/Asset/assetRedirect';

class App extends React.Component<any, any> {
  public state = {
    hideHeader: false,
  };
  private authService = new AuthService();
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
        <Header />


        {/* render app */}
        <main className='Main'>
          <Switch>
            {/* all app routes */}
            <Route exact path='/:assetId/event/:eventId' component={Login} />
            <Route exact path='/:assetId' component={AssetRedirect(Asset)} />
            <Route exact path='/settings' component={Settings} />
            <Route path="*" component={Search} />
          </Switch>
        </main>

        {/* render footer */}
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
