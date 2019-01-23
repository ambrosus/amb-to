import React, { SFC } from 'react';
import './HomeHeader.scss';
import iconLogo from 'assets/images/amb-logo.png';

const HomeHeader: SFC = () => {
  return (
    <div className='HomeHeader'>
      <div className='wrapper'>
        <img src={iconLogo} alt='no' />
      </div>
    </div>
  );
};

export default HomeHeader;
