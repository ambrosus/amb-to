import React, { SFC, Fragment } from 'react';
import './Location.scss';
import Item from '../../../../components/Item';
import { locationExists } from '../../../../utils';
import { Maps } from '../../../../components';
import TableRow from '../../../../components/TableRow';

interface LocationProps {
  event: any;
}

const Location: SFC<LocationProps> = ({ event }) => {
  return (
    <Fragment>
      {event.location &&
        <div className='item__container'>
          <Item title='Location'>
            <Fragment>
              {locationExists(event) &&
                <Maps
                  containerElement={<div className='item-map' />}
                  loadingElement={<div style={{ height: `100%` }} />}
                  mapElement={<div style={{ height: `100%` }} />}
                  lat={event.location.location.geometry.coordinates[0]}
                  lng={event.location.location.geometry.coordinates[1]} />}
              <div className='table'>
                <TableRow title='Name' value={event.location.name} />
                <TableRow title='City' value={event.location.city} />
                <TableRow title='County' value={event.location.country} />
              </div>
            </Fragment>
          </Item>
        </div>}
    </Fragment>
  );
};

export default Location;
