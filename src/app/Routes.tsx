/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
 */
import React, { lazy, ComponentType } from 'react';
import { Switch, Route, Redirect } from 'react-router';
import { lazyLoad, retry } from './utils';

const Home: any = lazy(() => retry(() => import('./containers/Home')));
const AssetWrapper: any = lazy(() => retry(() => import('./containers/AssetWrapper')));

const Routes = () => {
    return (
        <Switch>
            <Route path='/:assetId' component={lazyLoad(AssetWrapper)} />
            <Route exact path='/' component={lazyLoad(Home)} />
            <Redirect from='*' to='/' />
        </Switch>
    );
};

export default Routes;
