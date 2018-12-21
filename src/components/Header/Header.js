import React, { Component } from 'react';
import Navbar from './Navbar';

import './style.scss';


class Header extends Component {

    constructor(props) {
        super(props);
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        
        return (
          <div className="Header">
            <Navbar />
          </div>
        );
    }

}


export default Header;