/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
 */
import React, {lazy} from 'react';
import {Route, Switch} from 'react-router';
import {lazyLoad, retry} from './utils';

const Home: any = lazy(() => retry(() => import('./containers/Home')));
const AssetWrapper: any = lazy(() => retry(() => import('./containers/AssetWrapper')));
const Event: any = lazy(() => import('./containers/Event'));

const Routes = () => {
  return (
    <Switch>
      <Route path='/:assetId'  component={lazyLoad(AssetWrapper)}/>
      <Route exact path='/' component={lazyLoad(Home)}/>
      <Route exact path='/:assetId/events/:eventId' render={lazyLoad(Event)}/>
    </Switch>
  );
};

export default Routes;
