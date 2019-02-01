import React, { SFC, Fragment } from 'react';
import './AssetDetails.scss';
import { loopExclude } from '../../../../utils';
import { isObject } from 'util';
import TableRow from '../../../../components/TableRow';
import SubDetails from '../SubDetails';
import CustomData from '../CustomData';
import Item from '../../../../components/Item';

interface AssetProps {
  asset: any;
}

const AssetDetails: SFC<AssetProps> = ({ asset }) => {
  return (
    <Fragment>
      <Item title='Asset Details'>
        <Fragment>
          <div className='table'>
            {loopExclude(asset.info, ['type', 'images', 'action', 'author', 'eventId'])
              .map(([key, value]) => (
                !isObject(value) && !Array.isArray(value) && (
                  <TableRow key={key} title={key} value={value} />
                ))
              )}
          </div>
          <SubDetails asset={asset} />
          <CustomData asset={asset} />
        </Fragment>
      </Item>
    </Fragment>
  );
};

export default AssetDetails;
