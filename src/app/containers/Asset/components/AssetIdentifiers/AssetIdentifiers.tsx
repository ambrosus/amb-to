import React, { SFC } from 'react';
import './AssetIdentifiers.scss';
import { getStyles } from '../.././../../utils';
import TableRow from '../../../../components/TableRow';

interface AssetProps {
  asset: any;
}

const AssetIdentifiers: SFC<AssetProps> = ({ asset }) => {
  const linkIdentifer = (key: any, value: any) => {
    const newKey = key.toLowerCase();
    try {
      if (newKey.substr(0, 8) === 'ambrosus' && value[0].substr(0, 2) === '0x') {
        return `<a href="${value}" target="_blank">${value}</a>`;
      }
      return value;
    } catch (error) {
      return value;
    }
  };

  if (asset.identifiers.identifiers) {
    return (
      <div className='item__details' style={getStyles('components', asset)}>
        <h2 className='table-title' style={getStyles('components_titles', asset)}>Identifiers</h2>
        <div className='table'>
          {Object.entries(asset.identifiers.identifiers).map(([key, value]) => {
            return (
              <TableRow key={key} title={key} value={linkIdentifer(key, value)} asset={asset} />
            );
          })}
        </div>
      </div>
    );
  }
  return null;
};

export default AssetIdentifiers;
