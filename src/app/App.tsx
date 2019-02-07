import React from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { lazyLoad } from './utils';

const Home: any = lazyLoad(() => import('./containers/Home'));
const AssetWrapper: any = lazyLoad(() => import('./containers/AssetWrapper'));
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
            <Route path='/:assetId' component={AssetWrapper} />
            <Route exact path='/' component={Home} />
            <Redirect from='*' to='/' />
          </Switch>
        </main>
      </div>
    );
  }
}

export default withRouter(App);
