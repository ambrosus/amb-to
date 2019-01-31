import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Preloader from '../../components/Preloader/Preloader';
import { AssetService } from '../../services';
import { getStyles } from '../../utils';
import { History } from 'history';
import './Event.scss';
import { Footer, Header } from '../../components';
import DisplayBar from './components/DisplayBar';
import EventValidator from './components/EventValidator';
import Location from './components/Location';
import Document from './components/Document';
import Details from './components/Details';

interface EventProps {
  assetId: string;
  eventId: string;
  history: History;
}

interface EventStates {
  asset: any;
  event: any;
}

export default class Event extends Component<EventProps, EventStates> {

  constructor(props: any) {
    super(props);
    this.state = {
      event: null,
      asset: null,
    };
  }

  public componentWillMount() {
    const eventId = this.props.eventId;
    const assetId = this.props.assetId;

    if (!assetId || !eventId) {
      this.context.router.history.push('/');
      return;
    }
    this.loadEvent(eventId, assetId);
  }

  public async loadEvent(eventId: string, assetId: string) {
    const { history } = this.props;
    try {
      const events = await AssetService.getEvents(assetId);
      const asset = await AssetService.parseEvents(events.data);
      const event = asset.events.filter((e: any) => e && e.eventId === eventId)[0];

      if (!event) {
        history.push(`/${assetId}`);
        return;
      }
      this.setState({
        event,
        asset,
      });
    } catch (error) {
      history.push(`/${assetId}`);
    }
  }

  public render() {
    const { assetId, eventId } = this.props;
    const { asset, event } = this.state;
    if (!event) { return <Preloader />; }

    return (
      <div className='Event' style={getStyles('content', asset)}>
        <Header assetId={assetId} asset={asset} />
        <div className='wrapper'>
          <Link className='button' to={`/${assetId}`}>Back to Asset</Link>
          {!event && <h3>No event data</h3>}
          <DisplayBar event={event} />
          <div className='Event-container'>
            <div className='item__container'>
              <Details asset={asset} event={event} />
              <Document asset={asset} event={event} />
              <EventValidator asset={asset} eventId={eventId} />
            </div>
            <Location asset={asset} event={event} />
          </div>
        </div>
        <Footer asset={asset} />
      </div>
    );
  }
}
