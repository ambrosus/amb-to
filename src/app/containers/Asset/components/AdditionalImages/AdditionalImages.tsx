import React, { SFC } from 'react';
import './AdditionalImages.scss';
import { getStyles } from '../../../../utils';

interface AssetsProps {
  images: any[];
  onSelect(url: string): void;
  asset: any;
}

const AdditionalImages: SFC<AssetsProps> = ({ images, onSelect, asset }) => {

  const onChange = (image: string) => (event: any) => {
    onSelect(image);
  };

  if (images) {
    return (
      <div>
        {Object.keys(images).length > 1 &&
          <div style={{ paddingTop: '30px' }}>
            <div className='item__photo-title' style={getStyles('components_titles', asset)}>Additional Images</div>
            <div className='item__photo-container'>
              {Object.keys(images).map((image, index) => {
                return (
                  <div key={index} onClick={onChange(images[image].url)} className='item__photo' style={{ 'minHeight': '100px', 'backgroundImage': `url(${images[image].url})` }}>
                  </div>
                );
              })}
            </div>
          </div>}
      </div>
    );
  }
  return null;
};

export default AdditionalImages;
