import React, { SFC } from 'react';
import './DisplayBar.scss';
import { assetData, timeSince } from '../../../../utils';
import pinIcon from 'assets/svg/pin.svg';

interface DisplayProps {
  event: any;
}
const DisplayBar: SFC<DisplayProps> = ({ event }) => {

  const eventTypeToStyle = (value: string) => {
    if (assetData[value] === undefined) {
      return assetData['default'];
    }
    return assetData[value];
  };
  return (
    <div className='DisplayBar' style={{ 'backgroundColor': eventTypeToStyle(event.type).backgroundColor }}>
      <img src={eventTypeToStyle(event.type).iconUrl} alt=''
        className='bar__image' />
      <div className='bar__copy'>
        <div className='bar__container'>
          <h4 className='bar__heading'>{event.name}</h4>
        </div>
        <div className='bar__container'>
          <p className='bar__time'>{timeSince(event.timestamp * 1000)} ago</p>
          {event.location && <img src={pinIcon} className='bar__place--icon' />}
          {event.location && <p className='bar__place'>{event.location.name}</p>}
        </div>
      </div>
    </div>
  );
};

export default DisplayBar;
