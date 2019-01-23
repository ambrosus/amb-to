import React, { Component } from 'react';
import Info from './Info';
import { StorageService } from '../../services';

import './Asset.scss';

export default class Asset extends Component<any, any> {

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
    const assetId = this.props.assetId;
    const asset = this.props.asset;
    const style = this.getSyle();

    this.saveHistory(assetId, asset);

    return (
      <div>
        <div className='Asset' style={style}>
          <Info asset={asset} assetId={assetId} />
        </div>
      </div>
    );
  }
}
