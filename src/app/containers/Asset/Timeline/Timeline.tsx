import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import Map from '../../../components/Maps';

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


    const eventDivs = events.map((event: any, i: any) => {
      return (
        <div id={event.eventId} className="item__event__container">
          <div className="item__event__timeline ">
            <h5 className="item__event__timeline__heading ">{event.type}</h5>
            <div className="item__event__timeline__dot"></div>
            <p className="item__event__timeline__date ">{event.timestamp * 1000}</p>
          </div>

          <div className={'item__event__button' + this.state.expandEvents[i] ? '--active' : ''}>
            <div onClick={(i) => { this._expandEvent(i) }} className="item__event__single" style={{ 'backgroundColor': this._eventTypeToStyle(event.type).backgroundColor }}>
              <div className="item__event__single__image">
                <img src={`/assets/images/'${this._eventTypeToStyle(event.type).iconUrl}`} />
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

            <div className={'item__event__more-details item__event__more-details' + this.state.expandEvents[i] ? '--active' : ''}>
              {/* div className="item__event__more-details item__event__more-details--active"> */}
        {/* <!-- Google map --> */}

        {event && event.location.location.geometry.coordinates && isArray(event.location.location.geometry.coordinates) && event.location.location.geometry.coordinates.length === 2 ?
        <Map places={[{lat: event.location.location.geometry.coordinates[0], lng: event.location.location.geometry.coordinates[1] }]} />
        : ''}

        {/* <app-map *ngIf="(event | checkIf: 'event.location.location.geometry.coordinates') && isArray(event.location.location.geometry.coordinates) && event.location.location.geometry.coordinates.length === 2"
          [pins]="[{lat: event.location.location.geometry.coordinates[0], lng: event.location.location.geometry.coordinates[1] }]"></app-map> */}


              <div className="item__event__more-details__row ">
                <h5 className="item__event__more-details__cell--title ">AMB-id</h5>
                <p className="item__event__more-details__cell ">{ event.eventId }</p>
              </div>
              <div className="item__event__more-details__row ">
                <h5 className="item__event__more-details__cell--title ">Timestamp</h5>
                <p className="item__event__more-details__cell ">{ event.timestamp * 1000}</p>
              </div>
              <div className="item__event__more-details__row ">
                <h5 className="item__event__more-details__cell--title ">Created by</h5>
                <p className="item__event__more-details__cell ">{ event.author }</p>
              </div>
              <div className="item__event__more-details__row ">
              <Link className="item__event__more-details__button " to={`/${asset.assetId}/events/${event.eventId}`}>
              VIEW EVENT DETAILS...
              </Link>
                {/* <a className="item__event__more-details__button " routerLink="/{{assetId}}/events/{{event.eventId}}">VIEW EVENT DETAILS...</a> */}
              </div>
            </div>
          </div>
        </div >
      )
    });

    return (
      <div className="Timeline" >
      </div >
    )
  }
}

// Timeline.propTypes = {}

// Timeline.defaultProps = {}

export default Timeline
