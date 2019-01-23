import React, { Component } from 'react';
import Info from './Info';
import { StorageService, AssetService } from '../../services';
import './Asset.scss';
import { History } from 'history';
import { Preloader } from '../../components';

interface AssetProps {
  history: History;
  assetId: string;
}

interface AssetStates {
  asset: any;
}

export default class Asset extends Component<AssetProps, AssetStates> {

  constructor(props: AssetProps) {
    super(props);
    this.state = {
      asset: null,
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

  public render() {
    const { assetId } = this.props;
    const { asset } = this.state;
    if (asset) {
      return (
        <div>
          <div className='Asset'>
            <Info asset={asset} assetId={assetId} />
          </div>
        </div>
      );
    }
    return <Preloader />;
  }
}
