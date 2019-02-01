import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import iconLogo from 'assets/images/amb-logo.png';
import './Header.scss';
import SVG from 'react-svg';
import hamburger from 'assets/svg/hamburger_menu.svg';
import convertStyles from '../../utils/convertStyles';
import { inject, observer } from 'mobx-react';
import { AssetStore } from '../../store/asset.store';

interface HeaderProps {
  AssetStore?: AssetStore;
  assetId: string;
}

interface HeaderStates {
  revealMenu: boolean;
}

@inject('AssetStore')
@observer
export default class Header extends Component<HeaderProps, HeaderStates> {
  public state = {
    revealMenu: false,
  };

  public getNavbarStyle = () => {
    const { asset } = this.props.AssetStore!;
    try {
      return convertStyles(asset.branding.nav) || {};
    } catch (error) {
      return {};
    }
  }

  public getLogoStyle = () => {
    const { asset } = this.props.AssetStore!;
    try {
      return convertStyles(asset.branding.logo) || {};
    } catch (error) {
      return {};
    }
  }

  public getNavbarLogo = () => {
    const { asset } = this.props.AssetStore!;
    try {
      return asset.branding.logo.url || iconLogo;
    } catch (error) {
      return iconLogo;
    }
  }

  public toggleMenu = () => {
    this.setState({ revealMenu: !this.state.revealMenu });
  }

  public render() {
    const { assetId } = this.props;
    const { revealMenu } = this.state;
    return (
      <nav className='navigation' style={this.getNavbarStyle()} >
        <div className='wrapper'>
          <div className='navigation__menu'>
            <Link to={`/${assetId}`} className='navigation__logo--link'>
              <img style={this.getLogoStyle()} src={this.getNavbarLogo()} alt='Ambrosus Logo' className='navigation__logo' />
            </Link>
            <div className={`navigation--right-side ${revealMenu ? 'active' : ''}`}>
              <button onClick={this.toggleMenu} className='navigation__menu__icon' >
                <SVG wrapper='span' className='burger' src={hamburger} />
              </button>
            </div>
          </div >
          <div style={this.getNavbarStyle()} className={`navigation__container
           ${revealMenu ? 'navigation__container--active' : ''}`} >
            <a className='navigation__container__link'>Settings</a>
          </div >
        </div >
      </nav >
    );
  }
}
