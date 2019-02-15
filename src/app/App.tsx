import React, { lazy } from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { lazyLoad } from './utils';

const Home: any = lazy(() => import('./containers/Home'));
const AssetWrapper: any = lazy(() => import('./containers/AssetWrapper'));
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
        <main className='Main'>
          <Switch>
            <Route path='/:assetId' component={lazyLoad(AssetWrapper)} />
            <Route exact path='/' component={lazyLoad(Home)} />
            <Redirect from='*' to='/' />
          </Switch>
        </main>
      </div>
    );
  }
}

export default withRouter(App);
