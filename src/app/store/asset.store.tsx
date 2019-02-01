import { observable, action } from 'mobx';
import { AssetService } from '../services';

export class AssetStore {
  @observable public asset: any = null;

  @action
  public async setAsset(assetId: string) {
    this.asset = await AssetService.getAsset(assetId);
  }
}

const assetStore = new AssetStore();
export default assetStore;
