import React, { SFC } from 'react';
import './AssetDetails.scss';
import { getStyles, loopExclude, valueJSON } from '../../../../utils';
import { isObject } from 'util';
import TableRow from '../../../../components/TableRow';
import SubDetails from '../SubDetails';
import CustomData from '../CustomData';

interface AssetProps {
  asset: any;
}

const AssetDetails: SFC<AssetProps> = ({ asset }) => {
  return (
    <div className='item__details' style={getStyles('components', asset)}>
      <h2 className='table-title' style={getStyles('components_titles', asset)}>Asset Details</h2>
      <div className='table'>
        {loopExclude(asset.info, ['type', 'images', 'action', 'author', 'eventId'])
          .map(([key, value]) => (
            !isObject(value) && !Array.isArray(value) && (
              <TableRow title={key} value={value} asset={asset} />
            ))
          )}
      </div>
      <SubDetails asset={asset} />
      <CustomData asset={asset} />
    </div >
  );
};

export default AssetDetails;
