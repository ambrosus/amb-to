import React, { Component } from 'react';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
import Preloader from '../../components/Preloader/Preloader';
import { getStyles, getEvent, scrollTop } from '../../utils';
import './Event.scss';
import DisplayBar from './components/DisplayBar';
import EventValidator from './components/EventValidator';
import Location from './components/Location';
import Document from './components/Document';
import Details from './components/Details';
import { inject, observer } from 'mobx-react';
import { AssetStore } from '../../store/asset.store';

interface EventProps extends RouteComponentProps<{ assetId: string, eventId: string }> {
  AssetStore?: AssetStore;
}

interface EventStates {
  event: any;
}

@inject('AssetStore')
@observer
class Event extends Component<EventProps, EventStates> {

  constructor(props: any) {
    super(props);
    this.state = {
      event: null,
    };
  }

  public async componentDidMount() {
    const { assetId, eventId } = this.props.match.params;
    const { history } = this.props;
    if (!assetId || !eventId) {
      history.push('/');
      return;
    }
    if (!this.props.AssetStore!.asset) {
      await this.props.AssetStore!.setAsset(assetId);
      if (!this.props.AssetStore!.asset) {
        history.push(`/`);
      }
    }
    const eventState = getEvent(this.props.AssetStore!.asset.events, eventId);
    if (!eventState) {
      history.push(`/${assetId}`);
    }
    scrollTop();
    this.setState({ event: eventState });
  }

  public render() {
    const { assetId, eventId } = this.props.match.params;
    const { event } = this.state;
    if (!event) { return <Preloader />; }

    return (
      <div className='Event' style={getStyles('content')}>
        <div className='wrapper'>
          <Link className='button' to={`/${assetId}`}>Back to Asset</Link>
          {!event && <h3>No event data</h3>}
          <DisplayBar event={event} />
          <div className='Event-container'>
            <div className='item__container'>
              <Details event={event} />
              <Document event={event} />
              <EventValidator eventId={eventId} />
            </div>
            <Location event={event} />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Event);
