import React, { SFC } from 'react';
import './AdditionalImages.scss';
import { getStyles } from '../../../../utils';

interface AssetsProps {
  images: any[];
  onSelect(url: string): void;
}

const AdditionalImages: SFC<AssetsProps> = ({ images, onSelect }) => {

  const onChange = (image: string) => (event: any) => {
    onSelect(image);
  };

  if (images && Object.keys(images).length > 1) {
    return (
      <div className='AdditionalImages'>
        <div className='AdditionalImages-title'
          style={getStyles('components_titles')}>Additional Images</div>
        <div className='AdditionalImages-container'>
          {Object.keys(images).map((image, index) => (
            <div key={index} onClick={onChange(images[image].url)} className='AdditionalImages-photo' style={{ 'backgroundImage': `url(${images[image].url})` }}>
            </div>
          )
          )}
        </div>
      </div>
    );
  }
  return null;
};

export default AdditionalImages;
