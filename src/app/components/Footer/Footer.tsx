import React from 'react';
import './Footer.scss';
import SVG from 'react-svg';
import iconLogo from '../../../assets/icons/logo-light.svg';

const Footer = (prop: any) => {
  return (
    <footer className='Footer'>
      <div className='sub-footer'>
        <div className='copyright'>
          <p>&copy; Ambrosus Technologies { new Date().getFullYear() } - All Rights Reserved</p>
        </div>
        <div className='logo'>
          <SVG className='SVG' wrapper='span' src={iconLogo}></SVG>
        </div>
        <div className='contact'>
          <a href='mailto:info@ambrosus.com'>info@ambrosus.com</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
