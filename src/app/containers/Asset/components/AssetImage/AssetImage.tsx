import React, { SFC } from 'react';

interface AssetProps {
  url: string;
  name: string;
}
const AssetImage: SFC<AssetProps> = ({ url, name }) => {
  return (
    <div className='item__hero'>
      <div className='item__hero__image-wrapper' style={{ 'backgroundImage': `url(${url})` }}>
        <h1 className='item__hero__title'>{name}</h1>
      </div>
    </div>
  );
};

export default AssetImage;
