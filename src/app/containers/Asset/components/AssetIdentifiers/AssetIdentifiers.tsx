import React, { SFC } from 'react';
import './AssetIdentifiers.scss';
import TableRow from '../../../../components/TableRow';
import Item from '../../../../components/Item';

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
      <Item asset={asset} title='Identifiers'>
        <div className='table'>
          {Object.entries(asset.identifiers.identifiers).map(([key, value]) => {
            return (
              <TableRow key={key} title={key} value={linkIdentifer(key, value)} asset={asset} />
            );
          })}
        </div>
      </Item>
    );
  }
  return null;
};

export default AssetIdentifiers;
