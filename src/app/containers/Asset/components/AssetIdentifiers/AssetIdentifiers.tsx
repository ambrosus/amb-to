import React, { SFC } from 'react';
import './AssetIdentifiers.scss';
import TableRow from '../../../../components/TableRow';
import Item from '../../../../components/Item';

interface AssetProps {
  info: any;
}

const AssetIdentifiers: SFC<AssetProps> = ({ info }) => {
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

  if (info.identifiers && info.identifiers.identifiers) {
    return (
      <Item title='Identifiers'>
        <div className='table'>
          {Object.entries(info.identifiers.identifiers).map(([key, value]) => {
            return (
              <TableRow key={key} title={key} value={linkIdentifer(key, value)} />
            );
          })}
        </div>
      </Item>
    );
  }
  return null;
};

export default AssetIdentifiers;
