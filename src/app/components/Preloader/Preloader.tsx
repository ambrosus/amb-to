import React from 'react';
import './Preloader.scss';

const Preloader = () => {
  return <div className='asset-preloader'>
    <div>
      <div className='asset-preloader__image' />
      <div className='asset-preloader__details'>
        <div />
        <div />
      </div>
    </div>
    <div>
      <div className='asset-preloader__details'>
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  </div>;
};

export default Preloader;
