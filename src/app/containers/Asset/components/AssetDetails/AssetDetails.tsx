/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
 */
import React, { SFC, Fragment } from 'react';
import './AssetDetails.scss';
import TableRow from '../../../../components/TableRow';
import SubDetails from '../SubDetails';
import CustomData from '../CustomData';
import Item from '../../../../components/Item';
import { toJS } from 'mobx'

interface AssetProps {
  asset: any;
}

const AssetDetails: SFC<AssetProps> = ({ asset }) => {
  return (
    <Fragment>
      <Item title='Asset Details'>
        <Fragment>
          <div className='table'>
            <TableRow title='Name' value={asset.info.name} />
            {asset.info.properties.map((value: { key: string, value: string }, index: number) => (
              <TableRow key={index} title={value.key} value={value.value} />
            ))}
          </div>
          <SubDetails asset={asset.info.groups} />
          <CustomData asset={asset} />
        </Fragment>
      </Item>
    </Fragment>
  );
};

export default AssetDetails;
