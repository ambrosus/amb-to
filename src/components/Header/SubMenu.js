import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './style.scss';


class Submenu extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const items = this.props.items ? this.props.items : [];
        const itemsUi = items.map((item) => {
            return (
              <li className="nav__submenu-item ">
                <Link to={item.link}>{item.label}</Link>
              </li>
            )
        });

        return (
          <ul className="nav__submenu">
            {itemsUi}
          </ul>
        );
    }

}


export default Submenu;