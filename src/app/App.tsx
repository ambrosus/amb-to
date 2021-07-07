/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
 */
import React from 'react';

import './App.scss';
import * as Sentry from '@sentry/browser';
import config from './config';
import Routes from './Routes';

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
                    <Routes />
                </main>
            </div>
        );
    }
}

export default App;
