import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import iconLogo from 'assets/images/amb-logo.png';
import './Header.scss';

export default class Header extends Component<any, any> {

  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <header className='Header'>
        <div className='wrapper'>
          <Link className='logo' to={'/'}>
            <img src={iconLogo} />
          </Link>
        </div>
      </header>
    );
  }
}
