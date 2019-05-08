/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
 */
import React from 'react';
import './HomeHeader.scss';
import iconLogo from 'assets/images/amb-logo.png';

const HomeHeader = () => {
  return (
    <div className='HomeHeader'>
      <div className='wrapper'>
        <img src={iconLogo} alt='no' />
      </div>
    </div>
  );
};

export default HomeHeader;
