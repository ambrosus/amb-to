import React, { SFC } from 'react';
import './AssetIdentifiers.scss';
import { getStyles } from '../.././../../utils';
import TableRow from '../../../../components/TableRow';

interface AssetProps {
  asset: any;
}

const AssetIdentifiers: SFC<AssetProps> = ({ asset }) => {
  if (asset.identifiers.identifiers) {
    return (
      <div className='item__details' style={getStyles('components', asset)}>
        <h2 className='item__table__title' style={getStyles('components_titles', asset)}>Identifiers</h2>
        <div className='item__table'>
          {Object.entries(asset.identifiers.identifiers).map(([key, value]) => {
            return (
              <TableRow key={key} title={key} value={value} asset={asset} />
            );
          })}
        </div>
      </div>
    );
  }
  return null;
};

export default AssetIdentifiers;
