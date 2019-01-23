import React, { Component } from 'react';
import { getStyles } from '../../../utils';
import Timeline from '../Timeline';

import './Info.scss';
import AssetImage from '../components/AssetImage';
import AdditionalImages from '../components/AdditionalImages';
import AssetIdentifiers from '../components/AssetIdentifiers';
import AssetDetails from '../components/AssetDetails';

export default class Info extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      selectedImage: null,
    };
  }

  public switchImage(image: string) {
    this.setState({
      selectedImage: image,
    });
  }

  public onImageSelect = (selectedImage: string) => {
    this.setState({ selectedImage });
  }

  public render() {
    const selectedImage = this.state.selectedImage;
    const asset = this.props.asset;
    const assetId = this.props.assetId;
    return (
      <div className='Info'>
        <div className='item' style={getStyles('content', asset)}>
          <div className='wrapper'>
            <div className='item__container'>
              <AssetImage url={selectedImage ? selectedImage : asset.info.images.default.url} name={asset.info.name} />
              <AdditionalImages images={asset.info.images} asset={asset} onSelect={this.onImageSelect} />
              <AssetIdentifiers asset={asset} />
              <AssetDetails asset={asset} />
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
