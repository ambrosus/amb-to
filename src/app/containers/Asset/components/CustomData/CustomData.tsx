import React, { SFC } from 'react';
import TableRow from '../../../../components/TableRow';
import { getStyles, isObject, valueJSON } from '../../../../utils';

interface AssetProps {
  asset: any;
}

const CustomData: SFC<AssetProps> = ({ asset }) => {
  const assetCustomData = asset.customData ? asset.customData : [];
  return (
    assetCustomData.map((row: any) => {
      return (
        <div>
          <hr className='item__table__separator ' />
          <h3 className='item__table__subtitle' style={getStyles('components_subtitles', asset)}>{row.title}</h3>
          <div className='item__table '>
            {row.values.map((custom: any) => {
              return (
                <TableRow title={custom.title} value={isObject(custom.value) ? valueJSON(JSON.stringify(custom.value, null, 5)) : custom.value} key={custom.title} asset={asset} />
              );
            })}
          </div>
        </div>
      );
    })
  );
};

export default CustomData;
