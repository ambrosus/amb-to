/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
 */
import React, {SFC, useEffect, useState} from 'react';
import { getStyles, generateLink } from '../../utils';
import { toJS } from 'mobx';

interface TableRowProps {
  title: any;
  value: any;
  smallImages?: boolean;
  titleClass?: string[];
  cellClass?: string[];
  rowClass?: string[];
}

const TableRow: SFC<TableRowProps> = ({ title, value, smallImages, titleClass = [],
  cellClass = [], rowClass = [] }) => {
  const rClass = ['table-row', ...rowClass].join(' ').trim();
  const tClass = ['table-cell--title', ...titleClass].join(' ').trim();
  const cClass = ['table-cell', ...cellClass].join(' ').trim();
  const [isShowing, setIsShowing] = useState(false);
  const [currentImg, setCurrentImg] = useState('');
  const checkTypeData = (data: any): any => {
    if (typeof data === 'string') {
      return generateLink(data);
    }  if (data.length > 0) {
      const newValue = toJS(data);
      return (
          <div style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'flex-start'}}>{newValue.map(el => {
            const fileBase64 = el.data;
            const body = fileBase64.split(',')[1];
            // Get content type from base64 string
            const contentType = fileBase64.match(/[^:]\w+\/[\w-+\d.]+(?=;|,)/)[0];
            if (contentType === 'application/pdf') {
              return <a  target='_blank' href='#' style={{marginRight: 10, minWidth: 65}} onClick={(e) => handleClick(e, body, contentType)}>{el.name}</a>;
            }
              return<div>
                <img className={smallImages ? 'small-image' : 'table__gallery-main'} style={{cursor: 'auto'}}  src={fileBase64} alt='img'/>
              {/*  onClick={() => {*/}
              {/*  setCurrentImg(fileBase64);*/}
              {/*  setIsShowing(true);*/}
              {/*}}*/}
              {/*  {isShowing && <div className='table__gallery-scale'>*/}
              {/*    <div className='table__gallery-wrap'><img  src={currentImg} alt=''/></div>*/}
              {/*    <div className='table__gallery-bg' onClick={() => setIsShowing(!isShowing)}></div>*/}
              {/*  </div>}*/}
              </div>;
              })}
          </div>
      );

    }
  };

  const handleClick = (e, body, contentType) => {
    e.preventDefault();
    const blob = b64toBlob(body, contentType);
    const blobUrl = URL.createObjectURL(blob);
    window.open(blobUrl, '_blank');
  };
  const b64toBlob = (b64Data, contentType= '', sliceSize= 512) => {
    const byteCharacters = atob(b64Data);
    const byteArrays: Array<any> = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);

      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }

    const blob = new Blob(byteArrays, {type: contentType});
    return blob;
  };

  const val = checkTypeData(value) ;
  return (
    <div className={rClass}>
      <div className={tClass} style={getStyles('components_keys')}>{title}</div>
      <div className={cClass} style={getStyles('components_values')}
        >
        {val}
      </div>

    </div >
  );
};

export default TableRow;
