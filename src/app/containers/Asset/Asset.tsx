import React, { Component } from 'react';
import Info from './Info';
import { AssetHeader } from '../../components';
import { StorageService } from '../../services';

import './Asset.scss';

export default class Asset extends Component<any, any> {
  public storage: StorageService = new StorageService();

  constructor(props: any) {
    super(props);
  }

  public getSyle() {
    try {
      return this.props.data.branding['content'] || {};
    } catch (error) {
      return {};
    }
  }

  public saveHistory(assetId: string, asset: any) {
    const title = asset.info.name;
    const history = { title, id: assetId };
    const tempHistory: any = this.storage.get('history');
    if (tempHistory && tempHistory.length > 0) {
      if (tempHistory.filter((e: any) => e.id === assetId).length === 0) {
        tempHistory.push(history);
        this.storage.set('history', tempHistory);
      }
    } else {
      this.storage.set('history', [history]);
    }
  }

  public render() {
    const assetId = this.props.assetId;
    const assetDetails = this.props.assetDetails;
    const style = this.getSyle();

    this.saveHistory(assetId, assetDetails);

    return (
      <div>
        <AssetHeader asset={assetDetails} assetId={assetId} />
        <div className='Asset' style={style}>
          <Info asset={assetDetails} assetId={assetId} />
        </div>
      </div>
    );
  }
}
