import React from 'react';
import CarouselSlider from 'react-carousel-slider';

const sliderBoxStyle = {
  background: 'transparent',
  overflow: 'hidden',
};

const itemsStyle = {
  width: '100%',
  height: '100%',
  cursor: 'pointer',
};

const buttonSetting = {
  placeOn: 'bottom-beneath',
};

const manner = {
  autoSliding: {interval: '4s'},
  circular: false,
  duration: '1s',
};

export const Slideshow = ({images}) => (
  <CarouselSlider
    slideCpnts={images.map(image => (<img src={image} alt={'ss'}/>))}
    manner={manner}
    accEle={{
      flag: false,
      button: false,
      dots: true,
    }}
    sliderBoxStyle={sliderBoxStyle}
    itemsStyle={itemsStyle}
  />
);
