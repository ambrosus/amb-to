/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
 */
import React, {Fragment, SFC, useState} from 'react';
import './Details.scss';
import Item from '../../../../components/Item';
import TableRow from '../../../../components/TableRow';
import {formatDate, getStyles, isObject, loopExclude, valueJSON} from '../../../../utils';
import {toJS} from 'mobx'

interface DetailsProps {
  event: any;
}

const Details: SFC<DetailsProps> = ({event}) => {
  const [arrImg, setArrImg] = useState([]);
  const [isShowing, setIsShowing] = useState(false);
  const [currentImg, setCurrentImg] = useState('');
  const checkArrayByType = () => {
    if (toJS(event).raws.length > 0) {
      setArrImg(toJS(event).raws.filter(el => {
        if (el.type === "image/png") return el
      }))
    }
  }
  const checkTypeData = (data: any): any => {
    if (toJS(data).length > 0) {
      const newValue = toJS(data)
      return (
        <div className='table__raws-det'>{newValue.map((el, i) => {
          const fileBase64 = el.data;
          const body = fileBase64.split(',')[1];
          // Get content type from base64 string
          const contentType = fileBase64.match(/[^:]\w+\/[\w-+\d.]+(?=;|,)/)[0];
          if (contentType === "application/pdf") {
            return <a key={i} target="_blank" href="#" className=''
                      onClick={(e) => handleClick(e, body, contentType)}>{el.name}</a>
          } else {
            return <div key={i}>
              <img
                className='table__gallery-main'
                onClick={() => {
                  setCurrentImg(fileBase64);
                  setIsShowing(true);
                }} src={fileBase64} alt="img"/>
              {isShowing && <div className="table__gallery-scale">
                <div className="table__gallery-wrap"><img src={currentImg} alt=""/></div>
                <div className="table__gallery-bg" onClick={() => setIsShowing(!isShowing)}></div>
              </div>}
            </div>
          }
        })}
        </div>
      );

    }
  }

  const handleClick = (e, body, contentType) => {
    e.preventDefault();
    const blob = b64toBlob(body, contentType);
    const blobUrl = URL.createObjectURL(blob);
    window.open(blobUrl, '_blank');
  }
  const b64toBlob = (b64Data, contentType = '', sliceSize = 512) => {
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
  }
  // useEffect(()=>{
  //   checkTypeData(event.raws)
  //
  // },[])
  return (
    <Item title='Event Details'>
      <Fragment>
        <div className='table'>
          <TableRow title='Event Id' value={event.eventId}/>
          <TableRow title='Created by' value={event.author}/>
          <TableRow title='Timestamp' value={formatDate(event.timestamp * 1000, true)}/>
          <TableRow title='Type' value={event.action}/>
        </div>
        <div className='table'>
          <hr className='table-seperator '/>
          {loopExclude(event, ['location', 'eventId', 'type', 'documents']).map(([key, value]) => {
            return (
              !Array.isArray(value) && (
                <TableRow key={key} title={key} value={value}/>
              ));
          })}
        </div>
        {event.raws && event.raws.length > 0 &&
        <Item title='Files Details'>
          {/*  <div className=' table table__gallery'>*/}
          {/*{arrImg.map(el=> <div>*/}
          {/*  <img className='table__gallery-main' onClick={()=> {*/}
          {/*    setCurrentImg(el['data']);*/}
          {/*    setIsShowing(true);*/}
          {/*  }} src={el['data']} alt="img"/>*/}
          {/*  {isShowing && <div className="table__gallery-scale">*/}
          {/*    <div className="table__gallery-wrap"><img src={currentImg} alt=""/></div>*/}
          {/*    <div className="table__gallery-bg" onClick={()=>setIsShowing(!isShowing)}></div>*/}
          {/*  </div>}*/}
          {/*</div>)}*/}
          {/*  </div>*/}
          {checkTypeData(event.raws)}
        </Item>
        }
        {
          loopExclude(event, ['location', 'eventId', 'type', 'documents'])
            .map(([key, value]) => {
              if (isObject(value)) {
                return (
                  <div key={key}>
                    <hr className='table-seperator '/>
                    <h3 className='table-subtitle' style={getStyles('components_subtitles')}>{key}</h3>
                    <div className='table'>
                      {Object.entries(value).map(([k, v]) => (
                        !Array.isArray(value) && (
                          <TableRow key={k} title={k} value={isObject(v) ? valueJSON(JSON.stringify(v, null, 5)) : v}/>
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
