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
