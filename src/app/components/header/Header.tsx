import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SVG from 'react-svg';
import iconLogo from '../../../assets/images/amb-logo.png';
import StorageService from '../../services/storage.service';
import DropDown from '../dropDown/DropDown';
import iconSettings from '../../../assets/icons/settings.svg';
import iconLogout from '../../../assets/icons/logout.svg';
import { toggleMenu } from '../../utils';

import './Header.scss';


export default class Header extends Component<any, any> {
  private storageService: any = new StorageService();
  private account = this.storageService.get('account') || {};
  private avatar = this.account.email ? this.account.email.charAt(0) : this.account.firstName ? this.account.firstName.charAt(0) : 'T';
  private dropDown = {
    title: 'Profile menu',
    items: [
      {
        type: 'header',
        title: `${this.account.firstName || ''} ${this.account.lastName || ''}`.trim() || 'No name',
        meta: this.account.email || this.account.address,
      },
      {
        type: 'separator',
      },
      {
        type: 'link',
        title: 'Settings',
        icon: iconSettings,
        link: '/settings',
      },
      {
        type: 'separator',
      },
    ],
  };

  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <header className='Header'>
        <div className='wrapper'>
          <Link className='logo' to={'/'}>
            <img src={iconLogo} alt=""/>
            {/* <SVG className='SVG' wrapper='span' src={iconLogo}></SVG> */}
          </Link>

          {/* {
            this.authService.isLoggedIn() &&
            (
              <div className='avatar'>
                <div onClick={toggleMenu}>{this.avatar}</div>
                <DropDown items={this.dropDown} />
              </div>
            )
          } */}
        </div>
      </header>
    );
  }
}