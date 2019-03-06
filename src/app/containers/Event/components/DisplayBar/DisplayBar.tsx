/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
 */
import React, { SFC } from 'react';
import './DisplayBar.scss';
import { assetDetails, timeSince } from '../../../../utils';
import pinIcon from 'assets/svg/pin.svg';
import SVG from 'react-svg';

interface DisplayProps {
  event: any;
}
const DisplayBar: SFC<DisplayProps> = ({ event }) => {

  const eventTypeToStyle = (value: string) => {
    if (assetDetails[value] === undefined) {
      return assetDetails['default'];
    }
    return assetDetails[value];
  };
  return (
    <div className='DisplayBar' style={{ 'backgroundColor': eventTypeToStyle(event.type).backgroundColor }}>
      <SVG src={eventTypeToStyle(event.type).iconUrl} wrapper='span' className='bar__image' />
      <div className='bar__copy'>
        <div className='bar__container'>
          <h4 className='bar__heading'>{event.name}</h4>
        </div>
        <div className='bar__container'>
          <p className='bar__time'>{timeSince(event.timestamp * 1000)} ago</p>
          {event.location && <SVG wrapper='span' src={pinIcon} className='bar__place--icon' />}
          {event.location && <p className='bar__place'>{event.location.name}</p>}
        </div>
      </div>
    </div>
  );
};

export default DisplayBar;
