/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
 */
import React, { SFC, lazy, Suspense } from 'react';
import './AdditionalImages.scss';
import { getStyles } from '../../../../utils';
import Loader from '../../../../components/Loader';
const BackgroundImage = lazy(() => import('../../../../components/BackgroundImage'));

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
            <Suspense key={index} fallback={<Loader />}>
              <BackgroundImage onChange={onChange(images[image].url)} url={images[image].url} />
            </Suspense>
          ))}
        </div>
      </div>
    );
  }
  return null;
};

export default AdditionalImages;
