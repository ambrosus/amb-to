import React, { Component } from 'react';
import './HistoryItems.scss';
import { Link } from 'react-router-dom';

interface HistoryProps {
  history: any;
}

export default class extends Component<HistoryProps> {
  public render() {
    const { history } = this.props;
    return (
      <Link className='HistoryItems' to={`/${history.id}`}>
        <div>{history.title}</div>
        <div className='asset-wrapper'>
          <small className='asset-id'>{history.id}</small>
        </div>
      </Link>
    );
  }
}
