/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
 */
import React, { Component } from 'react';
import Event from '../Event';
import './Timeline.scss';
import { Button } from '@ambrosus/react';
import { inject, observer } from 'mobx-react';
import { AssetStore } from '../../../../store/asset.store';

interface TimelineProps {
  events: any;
  assetId: string;
  AssetStore?: AssetStore;
}

interface TimelineState {
  btnObj: {
    disabled: boolean;
    loading: boolean;
  };
}
@inject('AssetStore')
@observer
export default class Timeline extends Component<TimelineProps, TimelineState> {
  public state = {
    btnObj: {
      disabled: false,
      loading: false,
    },
  };

  public loadEvent = async () => {
    const btnObj = {
      disabled: true,
      loading: true,
    };
    const { getEvents } = this.props.AssetStore!;
    this.setState({ btnObj });
    await getEvents(this.props.assetId);
    const data = {
      disabled: false,
      loading: false,
    };
    this.setState({ btnObj: data });
  }

  public showButton = () => {
    return this.props.AssetStore && this.props.AssetStore!.pagination && this.props.AssetStore!.pagination.hasNext;
  }

  public renderEvents = () => {
    const { events, assetId } = this.props;
    const { btnObj } = this.state;
    return (
      <React.Fragment>
        {events.map((event: any, i: number) =>
          <Event event={event} assetId={assetId} index={i} key={i} />)}
        {this.showButton() && <div className='btnWrapper'>
          <Button light onClick={this.loadEvent} disabled={btnObj.disabled} loading={btnObj.loading}>Show More</Button>
        </div>}
      </React.Fragment>
    );
  }

  public noEvents = () => {
    return (
      <div className='noContent'>
        <p>No Events Available</p>
      </div>
    );
  }

  public render() {
    const { events } = this.props;
    return (
      <div className='item__events Timeline'>
        <h2 className='table-title '>All Events</h2>
        {events.length ? this.renderEvents() : this.noEvents()}
      </div>
    );
  }
}
