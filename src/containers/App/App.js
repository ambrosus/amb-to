import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import logo from 'assets/images/logo.svg';
import './App.scss';
import Search from 'containers/Search';
import Asset from 'containers/Asset';
import Event from 'containers/Event';

import Header from 'components/Header';
import Footer from 'components/Footer';

import AssetRedirect from 'common/assetRedirect';
import seletSyle from 'common/selectStyle';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Header />
        <div className="Content">
          <Switch>
            <Route exact path="/" component={Search} />

            <Route path="/asset/:assetId" component={AssetRedirect(Asset)} />

            {/* <Route path="/:assetId" render={(props) => {
              return shouldRedirect(Asset, seletSyle, props);
            }} /> */}

             {/* <Route path="/:assetId" render={(props) => (
              <Asset key={props.match.params.assetId} {...props} />)
            } /> */}

            {/* <Route path="/asset/:assetId" render={(props) => (
              <AssetRedirect key={props.match.params.assetId} component={Asset} model={'Asset'} {...props} />)
            } /> */}

            <Route path="*" component={Search} />
          </Switch>
        </div>

        <Footer />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
