/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
 */
import React, { lazy } from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { lazyLoad } from './utils';

const Home: any = lazy(() => import('./containers/Home'));
const AssetWrapper: any = lazy(() => import('./containers/AssetWrapper'));
import './App.scss';
import * as Sentry from '@sentry/browser';
import config from './config';

console.log(`MY NODE ENV IS ${process.env.NODE_ENV}`);
if (process.env.NODE_ENV === 'production') {
  Sentry.init({ dsn: config.SENTRY_DSN, environment: config.SENTRY_ENV });
}

class App extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
  }

  public componentDidCatch(error: any, errorInfo: any) {
    Sentry.withScope(scope => {
      Object.keys(errorInfo).forEach(key => {
        scope.setExtra(key, errorInfo[key]);
      });
      Sentry.captureException(error);
    });
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
