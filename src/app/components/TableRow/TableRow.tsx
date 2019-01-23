import React, { SFC } from 'react';
import { getStyles, isObject, generateLink } from '../../utils';

interface TableRowProps {
  title: any;
  value: any;
  asset: any;
}

const TableRow: SFC<TableRowProps> = ({ title, value, asset }) => {
  return (
    <div className='item__table__row'>
      <div className='item__table__cell--title' style={getStyles('components_keys', asset)}>{title}</div>
      <div className={isObject(value) ? 'item__table__cell item__table__cell--json' : 'item__table__cell'} style={getStyles('components_values', asset)}
        dangerouslySetInnerHTML={{ __html: generateLink(value) }}>
      </div>
    </div >
  );
};

export default TableRow;
