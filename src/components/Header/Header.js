import React, { Component } from 'react';

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
          <div>
          </div>
        );
    }

}


export default Header;