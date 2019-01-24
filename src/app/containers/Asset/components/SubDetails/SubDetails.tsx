import React, { SFC } from 'react';
import './SubDetails.scss';
import { loopExclude, getStyles, valueJSON } from '../../../../utils';
import { isObject } from 'util';
import TableRow from '../../../../components/TableRow';

interface AssetProps {
  asset: any;
}

const SubDetails: SFC<AssetProps> = ({ asset }) => {
  return (
    <React.Fragment>
      {
        loopExclude(asset.info, ['type', 'images', 'action', 'author', 'eventId'])
          .map(([key, value]) => {
            if (isObject(value)) {
              return (
                <div key={key}>
                  <hr className='item__table__separator ' />
                  <h3 className='table-subtitle' style={getStyles('components_subtitles', asset)}>{key}</h3>
                  <div className='table'>
                    {Object.entries(value).map(([k, v]) => {
                      return (
                        <React.Fragment key={k}>
                          {!Array.isArray(value) && (
                            <TableRow title={k} asset={asset} value={isObject(v) ? valueJSON(JSON.stringify(v, null, 5)) : v} />
                          )}
                        </React.Fragment>
                      );
                    })}
                  </div>
                </div>
              );
            }
          })
      }
    </React.Fragment>
  );
};

export default SubDetails;
