import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import Maps from 'app/components/Maps/Maps';
import './Event.scss';

const styles = require('assets/data/styles.json');

class Event extends Component {
  constructor(props) {
    super(props);
  }

  _eventTypeToStyle(value) {
    if (styles[value] === undefined) {
      return styles['harvested'];
    } else {
      return styles[value];
    }
  }

  render() {
    const event = this.props.event | {};
    const places = [];
    if ((event && event.location.location.geometry.coordinates) && Array.isArray(event.location.location.geometry.coordinates) && event.location.location.geometry.coordinates.length === 2) {
      places.push({
        lat: event.location.location.geometry.coordinates[0],
        lng: event.location.location.geometry.coordinates[1]
      })
    }

    let expandEvents = [];
    let i = event.eventId;
    let eventTypeToStyle = this._eventTypeToStyle;


    return (
      <div className="Event">
        <div id={event.eventId} className="item__event__container ">
          <div className="item__event__timeline ">
            <h5 className="item__event__timeline__heading ">{event.type}</h5>
            <div className="item__event__timeline__dot"></div>
            <p className="item__event__timeline__date ">{event.timestamp}</p>
          </div>
          <div className={'item__event__button' + expandEvents[i] ? '--active' : ''}>
            <div onClick={expandEvents[i] = !expandEvents[i]} className="item__event__single" style={{ 'background-color': (event.type | eventTypeToStyle).backgroundColor }}>
              <div className="item__event__single__image">
                <img src="/assets/images/{{(event.type | eventTypeToStyle ).iconUrl}}" />
              </div>
              <div className="item__event__single__copy ">
                <div className="item__event__single__container ">
                  <h4 className="item__event__single__heading ">{event.name}}
                  <img src="/assets/images/blockchain.svg" className="item__event__single__heading--icon" />
                  </h4>
                </div>
                <div className="item__event__single__container ">
                  <p className="item__event__single__time ">{event.timestamp * 1000} ago</p>
                  {event.location ?
                    <div className="item__event__single__place-container ">
                      <img src="/assets/images/pin.svg " alt=" " className="item__event__single__place--icon " />
                      {event.location.city || event.location.country ?
                        <p className="item__event__single__place ">
                          {event.location.city ? event.location.city : ''}{event.location.country ? ', ' + event.location.country : ''}
                        </p> : ''}
                    </div> : ''}
                </div>
              </div>
            </div>

            <div className="item__event__more-details item__event__more-details{{expandEvents[i] ? '--active' : ''}} ">
              {/* <div className="item__event__more-details item__event__more-details--active"> */}
              {/* goole map */}

              {places && places.length > 0 ? <Maps places={places} /> : ''}

              <div className="item__event__more-details__row ">
                <h5 className="item__event__more-details__cell--title ">AMB-id</h5>
                <p className="item__event__more-details__cell ">{event.eventId}</p>
              </div>
              <div className="item__event__more-details__row ">
                <h5 className="item__event__more-details__cell--title ">Timestamp</h5>
                <p className="item__event__more-details__cell ">{event.timestamp}</p>
              </div>
              <div className="item__event__more-details__row ">
                <h5 className="item__event__more-details__cell--title ">Created by</h5>
                <p className="item__event__more-details__cell ">{event.author}</p>
              </div>
              <div className="item__event__more-details__row ">
                <a className="item__event__more-details__button " routerLink="/{{assetId}}/events/{{event.eventId}}">VIEW EVENT DETAILS...</a>
              </div>
            </div>
          </div>
        </div >
      </div>
    )
  }
}

Event.propTypes = {}

Event.defaultProps = {}

export default Event
