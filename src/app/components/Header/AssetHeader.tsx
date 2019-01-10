import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SVG from 'react-svg';
import iconLogo from '../../../assets/images/amb-logo.png';
import StorageService from '../../services/storage.service';
import DropDown from '../dropDown/DropDown';
import iconSettings from '../../../assets/icons/settings.svg';
import iconLogout from '../../../assets/icons/logout.svg';
import './AssetHeader.scss';

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

    this.state = {
      revealMenu: false,
      asset: this.props.asset,
      assetId: this.props.assetId,
    };
  }

  public toggleMenu() {
    this.setState({
      revealMenu: !this.state.revealMenu,
    });
  }

  public getNavbarStyle() {
    try {
      return this.state.asset.branding.nav || {};
    } catch (error) {
      return {};
    }
  }

  public getLogoStyle() {
    try {
      return this.state.asset.branding.logo || {};
    } catch (error) {
      return {};
    }
  }

  public getNavbarLogo() {
    try {
      return this.state.asset.branding.logoUrl || {};
    } catch (error) {
      return null;
    }
  }

  public render() {
    const asset = this.state.asset;
    const assetId = this.state.assetId;
    const revealMenu = this.state.revealMenu;
    const logo = this.getNavbarLogo() || iconLogo;
    const navColor = asset ? this.state.asset.branding['color-header'] : '#c0cccc';

    console.log('logo', logo);

    return (
      <div className='navigation' style={{ 'backgroundColor': navColor }}>
        <div className='wrapper'>
          <div className='navigation__menu'>

            {assetId &&
              <Link className='navigation__logo--link' to={`/${assetId}`}>
                <img src={logo} style={this.getLogoStyle()} alt='Ambrosus Logo' className='navigation__logo' />
              </Link>}

            <div className='navigation--right-side'>
              <button className={revealMenu ? 'navigation__menu__icon active' : 'navigation__menu__icon'} onClick={() => this.toggleMenu()}>
                <span className='navigation__menu--icon1'></span>
                <span className='navigation__menu--icon2'></span>
                <span className='navigation__menu--icon3'></span>
              </button>
            </div>
          </div >

          {assetId ?
            <div className={revealMenu ? 'navigation__container navigation__container--active' : 'navigation__container'} style={this.getNavbarStyle()}>
              <Link className='navigation__logo--link' to={`/${assetId}/settings`}>Settings</Link>
            </div >
            : ''}

        </div >
      </div >

    );
  }
}
