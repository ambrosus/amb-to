import React, { SFC } from 'react';
import { getStyles, generateLink } from '../../utils';

interface TableRowProps {
  title: any;
  value: any;
  titleClass?: string[];
  cellClass?: string[];
  rowClass?: string[];
}

const TableRow: SFC<TableRowProps> = ({ title, value, titleClass = [], cellClass = [], rowClass = [] }) => {
  const rClass = ['table-row', ...rowClass].join(' ').trim();
  const tClass = ['table-cell--title', ...titleClass].join(' ').trim();
  const cClass = ['table-cell', ...cellClass].join(' ').trim();
  return (
    <div className={rClass}>
      <div className={tClass} style={getStyles('components_keys')}>{title}</div>
      <div className={cClass} style={getStyles('components_values')}
        dangerouslySetInnerHTML={{ __html: generateLink(value) }}>
      </div>
    </div >
  );
};

export default TableRow;
