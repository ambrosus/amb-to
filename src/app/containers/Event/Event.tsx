/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
 */
import React, { Component } from 'react';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
import Preloader from '../../components/Preloader/Preloader';
import { getStyles, scrollTop } from '../../utils';
import './Event.scss';
import { inject, observer } from 'mobx-react';
import { AssetStore } from '../../store/asset.store';
import { DisplayBar, Details, Document, Location } from './components';

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
    const { history } = this.props;
    const { assetId, eventId } = this.props.match.params;
    try {
      scrollTop();
      if (!assetId || !eventId) {
        history.push('/');
        return;
      }
      if (!this.props.AssetStore!.event) {
        await this.props.AssetStore!.getEvent(eventId);
        if (!this.props.AssetStore!.event) {
          history.push('/');
        }
      }
    } catch (error) {
      history.push('/');
    }
  }

  public render() {
    const { assetId, eventId } = this.props.match.params;
    const { event, asset } = this.props.AssetStore!;
    if (!asset || !event) { return <Preloader />; }
    return (
      <div className='Event' style={getStyles('content')}>
        <div className='wrapper'>
          <Link className='back-button' to={`/${assetId}`}>Back to Asset</Link>
          {!event && <h3>No event data</h3>}
          <DisplayBar event={event} />
          <div className='Event-container'>
            <div className='item__container'>
              <Details event={event} />
              <Document event={event} />
            </div>
            <Location event={event} />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Event);
