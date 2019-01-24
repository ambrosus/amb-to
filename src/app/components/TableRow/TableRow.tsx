import React, { SFC } from 'react';
import { getStyles, isObject, generateLink } from '../../utils';

interface TableRowProps {
  title: any;
  value: any;
  asset?: any;
  titleClass?: string[];
  cellClass?: string[];
  rowClass?: string[];
}

const TableRow: SFC<TableRowProps> = ({ title, value, asset,
  titleClass = [], cellClass = [], rowClass = [] }) => {
  const rClass = ['table-row', ...rowClass].join(' ').trim();
  const tClass = ['table-cell--title', ...titleClass].join(' ').trim();
  const cClass = ['table-cell', ...cellClass].join(' ').trim();
  return (
    <div className={rClass}>
      <div className={tClass} style={getStyles('components_keys', asset)}>{title}</div>
      <div className={cClass} style={getStyles('components_values', asset)}
        dangerouslySetInnerHTML={{ __html: generateLink(value) }}>
      </div>
    </div >
  );
};

export default TableRow;
