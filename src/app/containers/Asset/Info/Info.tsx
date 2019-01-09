import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Info.scss';
import { isObject } from 'util';
import { valueJSON } from '../../../utils';
import Timeline from '../Timeline';

class Info extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      selectedImage: null,
    };
  }

  public getStyles(key: string) {
    try {
      return this.props.asset.branding[key] || {};
    } catch (error) {
      return {};
    }
  }

  public switchImage(image: string) {
    this.setState({
      selectedImage: image,
    });
  }

  public render() {
    const selectedImage = this.state.selectedImage;
    const asset = this.props.asset;
    const assetId = this.props.assetId;

    const assetCustomData = asset.customData ? asset.customData : [];

    return (
      <div className='Info'>

        <div className='item' style={this.getStyles('content')}>
          <div className='wrapper'>
            <div className='item__container'>

              <div className='item__hero'>
                <div className='item__hero__image-wrapper' style={{ 'backgroundImage': selectedImage ? `url('${selectedImage}')` : `url('${asset.info.images.default.url})` }}>
                  <h1 className='item__hero__title'>{asset.info.name}</h1>
                </div>
              </div>

              {asset.info.images &&
                <div>
                  {Object.keys(asset.info.images).length > 1 &&
                    <div style={{ paddingTop: '30px' }}>
                      <div className='item__photo-title' style={this.getStyles('components_titles')}>Additional Images</div>
                      <div className='item__photo-container'>
                        {Object.keys(asset.info.images).map((image) => {
                          return (
                            <div onClick={() => { this.switchImage(asset.info.images[image].url); }} className='item__photo' style={{ 'backgroundImage': `url(${asset.info.images[image].url})` }}>
                            </div>
                          );
                        })}
                      </div>
                    </div>}
                </div>}

              {asset.identifiers.identifiers &&
                <div className='item__details' style={this.getStyles('components')}>
                  <h2 className='item__table__title' style={this.getStyles('components_titles')}>Identifiers</h2>
                  <div className='item__table'>
                    {Object.entries(asset.identifiers.identifiers).map(([key, value]) => {
                      return (
                        <div className='item__table__row' key={key}>
                          <div className='item__table__cell--title' style={this.getStyles('components_keys')}>{key}</div>
                          <div className='item__table__cell' style={this.getStyles('components_values')}>
                            {value}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>}

              <div className='item__details' style={this.getStyles('components')}>
                <h2 className='item__table__title' style={this.getStyles('components_titles')}>Asset Details</h2>
                <div className='item__table'>
                  {Object.entries(asset.info).map(([key, value]) => {
                    if (['type', 'images', 'action', 'author', 'eventId'].includes(key)) {
                      return;
                    }
                    return (
                      <div className='item__table__row' key={key}>
                        {!isObject(value) && !Array.isArray(value) ?
                          <div className='item__table__cell--title' style={this.getStyles('components_keys')}>{key}</div>
                          : ''}
                        {!isObject(value) ?
                          <div className={isObject(value) ? 'item__table__cell item__table__cell--json' : 'item__table__cell'} style={this.getStyles('components_values')}>
                            {isObject(value) ? valueJSON(JSON.stringify(value, null, 5)) : value}
                          </div>
                          : ''}
                      </div>
                    );
                  })}
                </div>

                {Object.entries(asset.info).map(([key, value]) => {
                  if (['type', 'images', 'action', 'author', 'eventId'].includes(key)) {
                    return;
                  }
                  if (isObject(value)) {
                    return (
                      <div key={key}>
                        <hr className='item__table__separator ' />
                        <h3 className='item__table__subtitle' style={this.getStyles('components_subtitles')}>{key}</h3>

                        <div className='item__table'>
                          {Object.entries(value).map(([k, v]) => {
                            return (
                              <div className='item__table__row' key={k}>
                                {!Array.isArray(value) ?
                                  <div className='item__table__cell--title' style={this.getStyles('components_keys')}>{k}</div>
                                  : ''}
                                <div className={isObject(v) ? 'item__table__cell item__table__cell--json' : 'item__table__cell'} style={this.getStyles('components_values')}>
                                  {isObject(v) ? valueJSON(JSON.stringify(v, null, 5)) : v}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  }
                })}

                {assetCustomData.map((row: any) => {
                  return (
                    <div>
                      <hr className='item__table__separator ' />
                      <h3 className='item__table__subtitle' style={this.getStyles('components_subtitles')}>{row.title}</h3>
                      <div className='item__table '>

                        {row.values.map((custom: any) => {
                          return (
                            <div className='item__table__row'>
                              <div className='item__table__cell--title' style={this.getStyles('components_keys')}>{custom.title}</div>
                              <div className={isObject(custom.value) ? 'item__table__cell item__table__cell--json' : 'item__table__cell--json'} style={this.getStyles('components_values')}>
                                {isObject(custom.value) ? valueJSON(JSON.stringify(custom.value, null, 5)) : custom.value}

                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}

              </div >

            </div >

            <div className='item__container'>
              <Timeline events={asset.events} assetId={assetId} />
            </div >

          </div >
        </div >
      </div >

    );
  }
}

export default Info;
