import React, { SFC, Fragment } from 'react';
import './Details.scss';
import Item from '../../../../components/Item';
import TableRow from '../../../../components/TableRow';
import { loopExclude, getStyles, valueJSON } from '../../../../utils';
import { isObject } from 'util';

interface DetailsProps {
  event: any;
}
const Details: SFC<DetailsProps> = ({ event }) => {
  return (
    <Item title='Event Details'>
      <Fragment>
        <div className='table'>
          <TableRow title='Event Id' value={event.eventId} />
          <TableRow title='Created by' value={event.author} />
          <TableRow title='Timestamp' value={event.timestamp * 1000} />
          <TableRow title='Type' value={event.action} />
        </div>
        <div className='table'>
          <hr className='table-seperator ' />
          {loopExclude(event, ['location', 'eventId', 'type', 'documents']).map(([key, value]) => {
            return (
              !isObject(value) && !Array.isArray(value) && (
                <TableRow key={key} title={key} value={value} />
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
                    <h3 className='table-subtitle' style={getStyles('components_subtitles')}>{key}</h3>
                    <div className='table'>
                      {Object.entries(value).map(([k, v]) => (
                        !Array.isArray(value) && (
                          <TableRow key={k} title={k} value={isObject(v) ? valueJSON(JSON.stringify(v, null, 5)) : v} />
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
