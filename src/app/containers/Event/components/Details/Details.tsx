import React, { SFC, Fragment } from 'react';
import './Details.scss';
import Item from '../../../../components/Item';
import TableRow from '../../../../components/TableRow';
import { loopExclude, getStyles, valueJSON } from '../../../../utils';
import { isObject } from 'util';

interface DetailsProps {
  asset: any;
  event: any;
}
const Details: SFC<DetailsProps> = ({ asset, event }) => {
  return (
    <Item title='Event Details' asset={asset}>
      <Fragment>
        <div className='table'>
          <TableRow asset={asset} title='Event Id' value={event.eventId} />
          <TableRow asset={asset} title='Created by' value={event.author} />
          <TableRow asset={asset} title='Timestamp' value={event.timestamp * 1000} />
          <TableRow asset={asset} title='Type' value={event.action} />
        </div>
        <div className='table'>
          <hr className='table-seperator ' />
          {loopExclude(event, ['location', 'eventId', 'type', 'documents']).map(([key, value]) => {
            return (
              !isObject(value) && !Array.isArray(value) && (
                <TableRow key={key} title={key} value={value} asset={asset} />
              ));
          })}
        </div>
        {
          loopExclude(event, ['location', 'eventId', 'type', 'documents'])
            .map(([key, value]) => {
              if (isObject(value)) {
                return (
                  <div key={key}>
                    <hr className='table-seperator ' />
                    <h3 className='table-subtitle' style={getStyles('components_subtitles', asset)}>{key}</h3>
                    <div className='table'>
                      {Object.entries(value).map(([k, v]) => (
                        !Array.isArray(value) && (
                          <TableRow key={k} title={k} asset={asset} value={isObject(v) ? valueJSON(JSON.stringify(v, null, 5)) : v} />
                        ))
                      )}
                    </div>
                  </div>
                );
              }
            })
        }
      </Fragment>
    </Item>
  );
};

export default Details;
