import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import amblogo from 'assets/images/amb-logo.png';

import './style.scss';


class Navbar extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
        <nav className="nav">
            <ul className="nav__menu">
                <li className="nav__menu-item logo">
                    <Link to={'/'} className="item-child">
                        <img className="logo__image" src={amblogo} />
                    </Link>
                </li>
            </ul>
        </nav>
        );
    }

}


export default Navbar;