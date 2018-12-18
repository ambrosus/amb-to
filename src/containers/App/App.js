import React, { Component } from 'react';
import logo from '../../assets/images/logo.svg';
import './App.scss';
import Search from '../Search';
import Footer from '../../components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
        </header> */}
        <Search/>
        <Footer/>
      </div>
    );
  }
}

export default App;
