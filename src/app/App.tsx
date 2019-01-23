import React from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { Footer } from './components';
import { lazyLoad } from './utils';
const Asset: any = lazyLoad(() => import('./containers/Asset'));
const Event: any = lazyLoad(() => import('./containers/Event'));
const Home: any = lazyLoad(() => import('./containers/Home'));
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

        {/* render app */}
        <main className='Main'>
          <Switch>
            {/* all app routes */}
            <Route exact path='/:assetId/events/:eventId' render={props => <Event history={props.history}
              assetId={props.match.params.assetId} eventId={props.match.params.eventId} />} />
            <Route exact path='/:assetId' render={props => <Asset history={props.history}
              assetId={props.match.params.assetId} />} />
            <Route exact path='/' render={props => (<Home history={props.history} />)} />
            <Redirect from='*' to='/' />
          </Switch>
        </main>
        {/* render footer */}
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
