import React, { SFC, ReactNode } from 'react';
import './Item.scss';
import { getStyles } from '../../utils';

interface ItemProps {
  asset: any;
  title?: string;
  children: ReactNode;
  style?: React.CSSProperties;
}

const Item: SFC<ItemProps> = ({ asset, title, children, style }) => {
  const mergeStyle = Object.assign({}, getStyles('components', asset), style);
  return (
    <div className='Item' style={mergeStyle}>
      {title && <h2 className='Item-title' style={getStyles('components_titles', asset)}>{title}</h2>}
      {children}
    </div>
  );
};

export default Item;
