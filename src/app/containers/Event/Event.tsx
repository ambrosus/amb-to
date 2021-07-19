/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
 */
import React, {Component} from 'react';
import {Link, RouteComponentProps, withRouter} from 'react-router-dom';
import Preloader from '../../components/Preloader/Preloader';
import {getStyles} from '../../utils';
import './Event.scss';
import {inject, observer} from 'mobx-react';
import {AssetStore} from '../../store/asset.store';
import {Details, DisplayBar, Document, EventValidator, Location} from './components';
import Loader from "../../components/Loader";

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
    const {history} = this.props;
    const {assetId, eventId} = this.props.match.params;

    try {
      if (!assetId || !eventId) {
        history.push('/');
        return;
      }

      if (!this.props.AssetStore!.event) {
        // @ts-ignore
        const {events} = this.props.AssetStore
        if (events) {
          const event = events.filter(e => {
            return e.eventId === eventId
          })
          this.setState({event});
        }
      }
    } catch (error) {
      history.push('/');
    }
  }

  public render() {
    const {assetId, eventId} = this.props.match.params;
    const {event} = this.props.AssetStore!;
    if (!this.state.event && !event) {
      return <Preloader/>;
    }
    return (
      <div className='Event' style={getStyles('content')}>
        <div className='wrapper'>
          <Link className='back-button' to={`/${assetId}`}>Back to Asset</Link>
          {
            !(event || this.state.event) && <Loader/>
          }
          {
            this.state.event !== null &&
            (
              <>
                <DisplayBar event={this.state.event[0]}/>
                <div className='Event-container'>
                  <div className='item__container'>
                    <Details event={this.state.event[0]}/>
                    <Document event={this.state.event[0]}/>
                    <EventValidator eventId={eventId}/>
                  </div>
                  <Location event={this.state.event[0]}/>
                </div>
              </>
            )
          }
          {
            event !== null &&
            (
              <>
                <DisplayBar event={event}/>
                <div className='Event-container'>
                  <div className='item__container'>
                    <Details event={event}/>
                    <Document event={event}/>
                    <EventValidator eventId={eventId}/>
                  </div>
                  <Location event={event}/>
                </div>
              </>
            )
          }

        </div>
      </div>
    );
  }
}

export default withRouter(Event);
