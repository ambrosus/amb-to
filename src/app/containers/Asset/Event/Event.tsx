import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import Maps from '../../../components/Maps/Maps';
import Map from '../../../components/Maps/Map';

import './Event.scss';

import pinLogo from '../../../../assets/images/pin.svg'
import dolarLogo from '../../../../assets/images/dollar.svg'

const styles = require('assets/data/styles.json');


class Event extends Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      expandEvent: false
    }
  }

  _eventTypeToStyle(value: any) {
    if (styles[value] === undefined) {
      return styles['harvested'];
    } else {
      return styles[value];
    }
  }

  _expandEvent() {
    console.log('expand')
    this.setState({
      expandEvent: !this.state.expandEvent
    });
  }


  _toggleMap(e: any) {
    console.log('toggle');
    //expandEvents[i] = !expandEvents[i]
  }

  render() {
    const event = this.props.event;
    const assetId = this.props.assetId;
    const isArray = Array.isArray;

    const places = [];
    if ((event && event.location.location.geometry.coordinates) && Array.isArray(event.location.location.geometry.coordinates) && event.location.location.geometry.coordinates.length === 2) {
      places.push({
        lat: event.location.location.geometry.coordinates[0],
        lng: event.location.location.geometry.coordinates[1]
      })
    }


    return (
      <div id={event.eventId} className="item__event__container">
        <div className="item__event__timeline ">
          <h5 className="item__event__timeline__heading ">{event.type}</h5>
          <div className="item__event__timeline__dot"></div>
          <p className="item__event__timeline__date ">{event.timestamp * 1000}</p>
        </div>

        <div className={this.state.expandEvent ? 'item__event__button--active' : 'item__event__button'}>
          <div onClick={() => { this._expandEvent() }} className="item__event__single" style={{ 'backgroundColor': this._eventTypeToStyle(event.type).backgroundColor }}>
            <div className="item__event__single__image">
              <img src={dolarLogo} />
            </div>
            <div className="item__event__single__copy ">
              <div className="item__event__single__container ">
                <h4 className="item__event__single__heading ">{event.name}
                  {/* <img *ngIf="false " src="/assets/images/blockchain.svg" className="item__event__single__heading--icon"> */}
                </h4>
              </div>
              <div className="item__event__single__container ">
                <p className="item__event__single__time ">{event.timestamp * 1000} ago</p>


                {event.location ?
                  <div className="item__event__single__place-container">
                    <img src={pinLogo} className="item__event__single__place--icon " />
                    {event.location.city || event.location.country ?
                      <p className="item__event__single__place">
                        {event.location.city ? event.location.city : ''}{event.location.country ? ', ' + event.location.country : ''}
                      </p> : ''}
                  </div> : ''}

              </div>
            </div>
          </div>

          <div className={this.state.expandEvent ? 'item__event__more-details item__event__more-details--active' : 'item__event__more-details item__event__more-details'}>
            {/* div className="item__event__more-details item__event__more-details--active"> */}
            {/* <!-- Google map --> */}

            {event && event.location.location.geometry.coordinates && isArray(event.location.location.geometry.coordinates) && event.location.location.geometry.coordinates.length === 2 ?
              <Maps
                height={'300px'}
                width={'100%'}
                lat={event.location.location.geometry.coordinates[0]}
                lng={event.location.location.geometry.coordinates[1]} />

              // <Map
              //   containerElement={<div style={{ height: `400px` }} />}
              //   mapElement={<div style={{ height: `100%` }} />}
              //   lat={event.location.location.geometry.coordinates[0]}
              //   lng={event.location.location.geometry.coordinates[1]} />

              : ''}

            <div className="item__event__more-details__row ">
              <h5 className="item__event__more-details__cell--title ">AMB-id</h5>
              <p className="item__event__more-details__cell ">{event.eventId}</p>
            </div>
            <div className="item__event__more-details__row ">
              <h5 className="item__event__more-details__cell--title ">Timestamp</h5>
              <p className="item__event__more-details__cell ">{event.timestamp * 1000}</p>
            </div>
            <div className="item__event__more-details__row ">
              <h5 className="item__event__more-details__cell--title ">Created by</h5>
              <p className="item__event__more-details__cell ">{event.author}</p>
            </div>
            <div className="item__event__more-details__row ">
              <Link className="item__event__more-details__button " to={`/${assetId}/events/${event.eventId}`}>
                VIEW EVENT DETAILS...
          </Link>
            </div>
          </div>
        </div>
      </div >
    )
  }
}

export default Event
