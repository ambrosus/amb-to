import React, { SFC } from 'react';
import Event from '../Event';
import './Timeline.scss';

interface TimelineProps {
  events: any;
  assetId: string;
}

const Timeline: SFC<TimelineProps> = ({ events, assetId }) => {
  return (
    <div className='item__events '>
      <h2 className='table-title '>All Events</h2>
      {events.map((event: any, i: number) =>
        <Event event={event} assetId={assetId} index={i} key={i} />)}
    </div>
  );
};

export default Timeline;
