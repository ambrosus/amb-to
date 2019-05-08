/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
 */
import React, { SFC } from 'react';
import './HistoryItems.scss';
import { Link } from 'react-router-dom';
import { stringEllipsis } from '../../../../utils';

interface HistoryProps {
  history: { id: string, title: string };
}

const HistoryItems: SFC<HistoryProps> = ({ history }) => {
  return (
    <Link className='HistoryItems' to={`/${history.id}`}>
      <div className='asset-title'>{history.title}</div>
      <div className='asset-wrapper'>
        <small className='asset-id'>{stringEllipsis(history.id)}</small>
      </div>
    </Link>
  );
};

export default HistoryItems;
