import React, { SFC, Fragment } from 'react';
import './Document.scss';
import Item from '../../../../components/Item';
import { getStyles } from '../../../../utils';
import TableRow from '../../../../components/TableRow';

interface DocumentProps {
  event: any;
  asset: any;
}

const Document: SFC<DocumentProps> = ({ event, asset }) => {
  return (
    <Fragment>
      {event.documents &&
        <Item style={{ backgroundColor: '#fff' }} asset={asset} title='Event Documents'>
          {Object.entries(event.documents).map(([key, value]) => {
            return (
              <div key={key}>
                <h3 className='table-subtitle' style={getStyles('components_subtitles', asset)}>{key}</h3>
                <div className='table'>
                  {
                    Object.entries(value).map(([k, v]) => (
                      <TableRow asset={asset} title={k} key={k} value={v} />
                    ))
                  }
                </div>
              </div>
            );
          })}
        </Item>
      }
    </Fragment>
  );
};

export default Document;
