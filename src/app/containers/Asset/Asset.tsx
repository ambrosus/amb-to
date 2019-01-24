import React, { Component } from 'react';
import { StorageService, AssetService } from '../../services';
import './Asset.scss';
import { History } from 'history';
import { Preloader, Footer, Header } from '../../components';
import { getStyles } from '../../utils';
import AssetImage from './components/AssetImage';
import AdditionalImages from './components/AdditionalImages';
import AssetIdentifiers from './components/AssetIdentifiers';
import AssetDetails from './components/AssetDetails';
import Timeline from './components/Timeline';

interface AssetProps {
  history: History;
  assetId: string;
}

interface AssetStates {
  asset: any;
  selectedImage: string | null;
}

export default class Asset extends Component<AssetProps, AssetStates> {

  constructor(props: AssetProps) {
    super(props);
    this.state = {
      asset: null,
      selectedImage: null,
    };
  }

  public async componentDidMount() {
    const { assetId, history } = this.props;
    try {
      const events = await AssetService.getEvents(assetId);
      if (events.data.resultCount) {
        const asset = await AssetService.parseEvents(events.data);
        this.saveHistory(assetId, asset);
        this.setState({ asset });
        return;
      }
      history.push('/');
    } catch (error) {
      history.push('/');
    }
  }

  public saveHistory(assetId: string, asset: any) {
    const title = asset.info.name;
    const history = { title, id: assetId };
    const tempHistory: any = StorageService.get('history');
    if (tempHistory && tempHistory.length > 0) {
      if (tempHistory.filter((e: any) => e.id === assetId).length === 0) {
        tempHistory.push(history);
        StorageService.set('history', tempHistory);
      }
    } else {
      StorageService.set('history', [history]);
    }
  }

  public onImageSelect = (selectedImage: string) => {
    this.setState({ selectedImage });
  }

  public render() {
    const { assetId } = this.props;
    const { asset, selectedImage } = this.state;
    if (asset) {
      return (
        <div className='Info'>
          <Header asset={asset} assetId={assetId} />
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
          <Footer asset={asset} />
        </div >
      );
    }
    return <Preloader />;
  }
}
