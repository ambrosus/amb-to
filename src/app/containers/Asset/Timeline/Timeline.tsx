import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Map from '../../../components/Maps';
import Event from '../Event';

import './Timeline.scss';
import pinLogo from '/assets/images/pin.svg';
// tslint:disable-next-line:no-var-requires
const styles = require('assets/data/styles.json');

class Timeline extends Component<any, any> {
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

  public eventTypeToStyle(value: any, args?: any): any {
    if (styles[value] === undefined) {
      return styles['harvested'];
    }
    return styles[value];
  }

  public render() {

    const events = this.props.events;
    const assetId = this.props.assetId;

    const eventDivs = events.map((event: any, i: number) => {
      return (
        <Event event={event} assetId={assetId} index={i} key={i} />
      );
    });

    return (
      <div className='item__events '>
        <h2 className='item__table__title '>All Events</h2>
        {eventDivs}
      </div>
    );
  }
}

export default Timeline;
