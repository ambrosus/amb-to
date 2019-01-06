import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import Map from '../../../components/Maps';
import Event from '../Event';

import './Timeline.scss';

import pinLogo from '/assets/images/pin.svg'

const styles = require('assets/data/styles.json');

class Timeline extends Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      expandEvents: []
    }
  }

  _expandEvent(index: any) {
    let expandEvents = this.state.expandEvents;
    expandEvents[index] = !this.state.expandEvents[index];

    this.state = {
      expandEvents: expandEvents
    }
  }

  _eventTypeToStyle(value: any, args?: any): any {
    if (styles[value] === undefined) {
      return styles['harvested'];
    } else {
      return styles[value];
    }
  }

  public render() {

    const events = this.props.events;
    const asset = this.props.asset;
    const objectKeys = Object.keys;
    const expandEvents = [];
    const isArray = Array.isArray;

    console.log(events);


    const eventDivs = events.map((event: any, i: any) => {
      return (
        <Event event={event} assetId={asset.assetId} index={i} key={i} />
      )
    });

    return (
      <div className="item__events ">
        <h2 className="item__table__title ">All Events</h2>
        {eventDivs}
      </div>
    )
  }
}

// Timeline.propTypes = {}

// Timeline.defaultProps = {}

export default Timeline
