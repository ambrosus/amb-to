/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
 */
import React, { SFC, ReactNode } from 'react';
import './Item.scss';
import { getStyles } from '../../utils';

interface ItemProps {
  title?: string;
  children: ReactNode;
  style?: React.CSSProperties;
}

const Item: SFC<ItemProps> = ({ title, children, style }) => {
  const mergeStyle = Object.assign({}, getStyles('components'), style);
  return (
    <div className='Item' style={mergeStyle}>
      {title && <h2 className='Item-title' style={getStyles('components_titles')}>{title}</h2>}
      {children}
    </div>
  );
};

export default Item;
