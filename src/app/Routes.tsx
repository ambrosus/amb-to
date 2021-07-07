/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
 */
import React, {lazy, Suspense} from 'react';
import {Redirect, Route, Switch} from 'react-router';
import {lazyLoad, retry} from './utils';
import Loader from "./components/Loader";

const Home: any = lazy(() => retry(() => import('./containers/Home')));
const AssetWrapper: any = lazy(() => retry(() => import('./containers/AssetWrapper')));

const Routes = () => {
  return (
    <Switch>
      <Suspense fallback={<Loader/>}>
        <Route path='/:assetId' component={lazyLoad(AssetWrapper)}/>
        <Route exact path='/' component={lazyLoad(Home)}/>
        <Redirect from='*' to='/'/>
      </Suspense>
    </Switch>
  );
};

export default Routes;
