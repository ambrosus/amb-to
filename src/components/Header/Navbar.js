import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './style.scss';


class Navbar extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
        <nav className="nav">
            <ul className="nav__menu">
                <li className="nav__menu-item">
                    <Link to={'/'}>Amb.to</Link>
                </li>
            </ul>
        </nav>
        );
    }

}


export default Navbar;