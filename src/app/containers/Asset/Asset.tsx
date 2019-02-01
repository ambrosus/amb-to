import React, { Component } from 'react';
import './Asset.scss';
import { getStyles } from '../../utils';
import AssetImage from './components/AssetImage';
import AdditionalImages from './components/AdditionalImages';
import AssetIdentifiers from './components/AssetIdentifiers';
import AssetDetails from './components/AssetDetails';
import Timeline from './components/Timeline';
import { withRouter, RouteComponentProps } from 'react-router';
import { inject, observer } from 'mobx-react';
import { AssetStore } from '../../store/asset.store';

interface AssetProps extends RouteComponentProps<{ assetId: string }> {
  AssetStore: AssetStore;
}

interface AssetStates {
  selectedImage: string | null;
}

@inject('AssetStore')
@observer
class Asset extends Component<AssetProps, AssetStates> {

  constructor(props: AssetProps) {
    super(props);
    this.state = {
      selectedImage: null,
    };
  }

  public onImageSelect = (selectedImage: string) => {
    this.setState({ selectedImage });
  }

  public render() {
    const { assetId } = this.props.match.params;
    const { asset } = this.props.AssetStore;
    const { selectedImage } = this.state;
    if (asset && asset.events.length) {
      return (
        <div className='Info'>
          <div className='item' style={getStyles('content')}>
            <div className='wrapper'>
              <div className='item__container'>
                <AssetImage url={selectedImage ? selectedImage : asset.info.images.default.url} name={asset.info.name} />
                <AdditionalImages images={asset.info.images} onSelect={this.onImageSelect} />
                <AssetIdentifiers asset={asset} />
                <AssetDetails asset={asset} />
              </div>
              <div className='item__container'>
                <Timeline events={asset.events} assetId={assetId} />
              </div>
            </div>
          </div>
        </div>
      );
    }
    return null;
  }
}

export default withRouter(Asset);
