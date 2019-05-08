/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
 */
import React, { SFC } from 'react';
import './AssetImage.scss';

interface AssetProps {
  url: string;
  name: string;
}
const AssetImage: SFC<AssetProps> = ({ url, name }) => {
  return (
    <div className='AssetImage'>
      <div className='image-wrapper' style={{ 'backgroundImage': `url(${url})` }}>
        <h1 className='image-title'>{name}</h1>
      </div>
    </div>
  );
};

export default AssetImage;
