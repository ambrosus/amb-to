/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
 */
import React, { SFC } from 'react';
import TableRow from '../../../../components/TableRow';
import { getStyles, isObject, valueJSON } from '../../../../utils';

interface AssetProps {
  asset: any;
}

const CustomData: SFC<AssetProps> = ({ asset }) => {
  const assetCustomData = asset.customData ? asset.customData : [];
  return (
    assetCustomData.map((row: any, index: number) => {
      return (
        <div key={index}>
          <hr className='table-seperator ' />
          <h3 className='table-subtitle' style={getStyles('components_subtitles')}>{row.title}</h3>
          <div className='table '>
            {row.values.map((custom: any) => {
              return (
                <TableRow title={custom.title} value={isObject(custom.value) ? valueJSON(JSON.stringify(custom.value, null, 5)) : custom.value} key={custom.title} />
              );
            })}
          </div>
        </div>
      );
    })
  );
};

export default CustomData;
