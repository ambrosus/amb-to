import React, { Component } from 'react';
import Event from '../Event';

import './Timeline.scss';

// tslint:disable-next-line:no-var-requires
const styles = require('assets/data/styles.json');

export default class Timeline extends Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      expandEvents: [],
    };
  }

  public expandEvent(index: any) {
    const expandEvents = this.state.expandEvents;
    expandEvents[index] = !this.state.expandEvents[index];

    this.state = {
      expandEvents,
    };
  }

  public render() {
    const events = this.props.events;
    const assetId = this.props.assetId;
    const eventDivs = events.map((event: any, i: number) => <Event event={event} assetId={assetId} index={i} key={i} />);

    return (
      <div className='item__events '>
        <h2 className='item__table__title '>All Events</h2>
        {eventDivs}
      </div>
    );
  }
}
