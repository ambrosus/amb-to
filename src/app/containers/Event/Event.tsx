import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Preloader from '../../components/Preloader/Preloader';
import Maps from '../../components/Maps';
import { AssetService } from '../../services';
import { timeSince, isObject, valueJSON } from '../../utils';
import { AssetHeader } from '../../components';
import assetStyles from '../../../assets/data/styles.json';

import './Event.scss';

const styles: any = assetStyles;

export default class Event extends React.Component<any, any> {
  public ambrosus: any = new AssetService();

  public static contextTypes = {
    router: PropTypes.object,
  };

  constructor(props: any) {
    super(props);
    this.state = {
      event: null,
    };
  }

  public componentWillMount() {
    const eventId = this.props.match.params.eventId;
    const assetId = this.props.match.params.assetId;

    if (!assetId || !eventId) {
      this.context.router.history.push('/');
    } else {
      if (this.props.event) {
        this.setState({
          assetId,
          eventId,
          event: this.props.event,
        });
      } else {
        this.loadEvent(eventId, assetId);
      }
    }
  }

  public componentWillReceiveProps(nextProps: any) {
    const oldEventId = this.props.match.params.eventId;
    const newEventId = nextProps.match.params.eventId;
    const oldAssetId = this.props.match.params.assetId;
    const newAssetId = nextProps.match.params.assetId;

    const idExist = (oldEventId && newEventId) && (oldAssetId && newAssetId);

    if (idExist && (oldEventId !== newEventId || oldAssetId !== newAssetId)) {
      this.loadEvent(newEventId, newAssetId);
    }
  }

  public async loadEvent(eventId: string, assetId: string) {
    try {
      const events = await this.ambrosus.getEvents(assetId);
      const parseEvents = await this.ambrosus.parseEvents(events.data);
      const event = parseEvents.events.filter((e: any) => e && e.eventId === eventId)[0];

      if (!event) {
        this.context.router.history.push('/');
      }

      this.setState({
        assetId,
        eventId,
        event,
      });
    } catch (error) {
      this.context.router.history.push('/');
    }

  }

  public getStyles(key: string) {
    try {
      return this.props.asset.branding[key] || {};
    } catch (error) {
      return {};
    }
  }

  public eventTypeToStyle(value: string) {
    if (styles[value] === undefined) {
      return styles['harvested'];
    }
    return styles[value];
  }

  public getImages() {
    try {
      return this.props.asset.info.images;
    } catch (error) {
      return {};
    }
  }

  public render() {
    const event = this.state.event;
    const assetId = this.state.assetId;
    const eventId = this.state.eventId;

    if (!event) { return <Preloader />; }

    return (
      <div>
        <AssetHeader asset={null} assetId={assetId} />

        <div className='event' style={this.getStyles('content')}>
          <div className='wrapper'>
            <Link className='button' to={`/${assetId}`}>Back to Asset</Link>

            {!event && <h3 style={{ 'textAlign': 'center' }}>No event data</h3>}

            <div className='notification' style={{ 'backgroundColor': this.eventTypeToStyle(event.type).backgroundColor }}>
              <img src='/assets/images/{{(event.type | eventTypeToStyle ).iconUrl}}' alt='' className='notification__image' />
              <div className='notification__copy'>
                <div className='notification__container'>
                  <h4 className='notification__heading'>{event.name}
                    <img src='/assets/images/key.svg' alt='' className='notification__heading--icon' />
                  </h4>
                </div>
                <div className='notification__container'>
                  <p className='notification__time'>{timeSince(event.timestamp * 1000)} ago</p>

                  {event.location && <img src='/assets/images/pin.svg' className='notification__place--icon' />}
                  {event.location && <p className='notification__place'>{event.location.name}</p>}

                </div>
              </div>
            </div>

            <div className='item wrapper'>
              <div className='event__container'>
                <div className='item__container' style={{ margin: '0 20px' }}>

                  <div className='item__details' style={this.getStyles('components')}>
                    <h2 className='item__table__title' style={this.getStyles('components_titles')}>Event Details</h2>

                    <div className='item__table'>
                      <div className='item__table__row'>
                        <div className='item__table__cell--title' style={this.getStyles('components_keys')}>Event ID</div>
                        <div className='item__table__cell' style={this.getStyles('components_values')}>{event.eventId}</div>
                      </div>
                      <div className='item__table__row'>
                        <div className='item__table__cell--title' style={this.getStyles('components_keys')}>Created by</div>
                        <div className='item__table__cell' style={this.getStyles('components_values')}>{event.author}</div>
                      </div>
                      <div className='item__table__row'>
                        <div className='item__table__cell--title' style={this.getStyles('components_keys')}>Timestamp</div>
                        <div className='item__table__cell' style={this.getStyles('components_values')}>{event.timestamp * 1000}</div>
                      </div>
                      <div className='item__table__row'>
                        <div className='item__table__cell--title' style={this.getStyles('components_keys')}>Type</div>
                        <div className='item__table__cell' style={this.getStyles('components_values')}>{event.action}</div>
                      </div>
                    </div>

                    {/* key value */}

                    <div>
                      <div className='item__table'>
                        <hr className='item__table__separator' />
                        {Object.entries(event).map(([key, value]) => {
                          if (['location', 'eventId', 'type', 'documents'].includes(key)) {
                            return;
                          }

                          if (!isObject(value)) {
                            return (
                              <div className='item__table__row' key={key}>

                                {!Array.isArray(value) && <div className='item__table__cell--title' style={this.getStyles('components_keys')}>{key}</div>}
                                <div className={isObject(value) ? 'item__table__cell event-details-json item__table__cell--json' : 'item__table__cell event-details-json'} style={this.getStyles('components_values')}>
                                  {isObject(value) ? valueJSON(JSON.stringify(value, null, 5)) : value}
                                </div>
                              </div>
                            );
                          }

                        })}

                      </div>
                    </div>

                    {/* group */}
                    {Object.entries(event).map(([key, value]) => {
                      if (['location', 'eventId', 'type', 'documents'].includes(key)) {
                        return;
                      }

                      if (isObject(value)) {
                        return (
                          <div>
                            <hr className='item__table__separator' />
                            <h3 className='item__table__subtitle' style={this.getStyles('components_subtitles')}>{key}</h3>

                            <div className='item__table'>

                              {Object.entries(value).map(([k, v]) => {
                                return (
                                  <div className='item__table__row' key={k}>
                                    {!Array.isArray(value) && <div className='item__table__cell--title' style={this.getStyles('components_keys')}>{k}</div>}
                                    <div className={isObject(v) ? 'item__table__cell item__table__cell--json' : 'item__table__cell'} style={this.getStyles('components_values')}>
                                      {isObject(v) ? valueJSON(JSON.stringify(v, null, 5)) : v}
                                    </div>
                                  </div>
                                );
                              })}
                            </div>

                          </div>
                        );
                      }
                    })
                    }
                  </div>

                  {event.documents &&
                    <div className='item__details'>
                      <h2 className='item__table__title' style={this.getStyles('components_titles')}>Event Documents</h2>

                      {Object.entries(event.documents).map(([key, value]) => {
                        return (
                          <div key={key}>
                            <h3 className='item__table__subtitle' style={this.getStyles('components_subtitles')}>{key}</h3>
                            <div className='item__table'>

                              {Object.entries(value).map(([k, v]) => {
                                return (
                                  <div className='item__table__row' key={k}>
                                    <div className='item__table__cell--title' style={this.getStyles('components_keys')}>{k}</div>
                                    <div className='item__table__cell event-details-json' style={this.getStyles('components_values')}>{v}</div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        );
                      })}

                    </div>}

                  {/* CHECK VALIDATION */}
                  <div className='item__details' style={this.getStyles('components')}>
                    <div className='item__table'>
                      <div className='item__table__row'>

                        <div className='item__table__cell--title'>Check Event Validation</div>
                        <div className='item__table__cell event-details-json'>
                          <Link target='_blank' className='button' to={`https://ambrosus.github.io/app-checker/?eventId=${eventId}`}>Click Here</Link>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>

                {event.location &&
                  <div className='item__container' style={{ margin: '0 20px' }}>

                    <div className='item__details' style={this.getStyles('components')}>
                      <h2 className='item__table__title' style={{ ...{ 'margin': 0 }, ...this.getStyles('components_titles') }}>Location</h2>

                      {event && event.location && event.location.location.geometry.coordinates && Array.isArray(event.location.location.geometry.coordinates) && event.location.location.geometry.coordinates.length === 2 &&
                        <Maps
                          containerElement={<div style={{ height: `400px`, width: '100%' }} />}
                          mapElement={<div style={{ height: `100%` }} />}
                          lat={event.location.location.geometry.coordinates[0]}
                          lng={event.location.location.geometry.coordinates[1]} />}

                      <div className='item__table'>
                        <div className='item__table__row'>
                          <div className='item__table__cell--title' style={this.getStyles('components_keys')}>Name</div>
                          <div className='item__table__cell' style={this.getStyles('components_values')}>{event.location.name}</div>
                        </div>
                        <div className='item__table__row'>
                          <div className='item__table__cell--title' style={this.getStyles('components_keys')}>City</div>
                          <div className='item__table__cell' style={this.getStyles('components_values')}>{event.location.city}</div>
                        </div>
                        <div className='item__table__row'>
                          <div className='item__table__cell--title' style={this.getStyles('components_keys')}>Country</div>
                          <div className='item__table__cell' style={this.getStyles('components_values')}>{event.location.country}</div>
                        </div>
                      </div>
                    </div>

                  </div>}
              </div>
            </div>
          </div >
        </div>
      </div>
    );
  }
}
