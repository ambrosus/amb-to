/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
 */
import { observable, action } from 'mobx';
import { AssetService } from '../services';
import config from '../config';
export class AssetStore {
  @observable public asset: any = null;
  @observable public events: any = null;
  @observable public brandings: any = null;
  @observable public pagination: any = null;
  @observable public event: any = null;

  @action
  public setAsset = (assetId: string) => {
    return new Promise(async (resolve, reject) => {
      AssetService.getAsset(assetId).then(asset => {
        this.asset = asset;
        resolve(true);
      }).catch(error => reject(error));
      AssetService.getEvents({ assetId }).then((result: any) => {
        this.events = result.events;
        this.pagination = result.pagination;
      }).catch(err => reject(err));
      AssetService.getBranding(assetId).then(brandings => {
        this.brandings = brandings;
      }).catch(err => {
        this.brandings = {};
      });
    });
  }

  @action
  public getEvents = (assetId: string) => {
    return new Promise((resolve, reject) => {
      const next = this.pagination.next;
      AssetService.getEvents({ assetId, next }).then((result: any) => {
        this.events = [...this.events, ...result.events];
        this.pagination = result.pagination;
        resolve(true);
      }).catch(error => reject(error));
    });
  }

  @action
  public getEvent = (eventId: string) => {
    return new Promise(async (resolve, reject) => {
      try {
        this.event = await AssetService.getEvent(eventId);
        resolve(true);
      } catch (error) {
        reject(error);
      }
    });
  }

  @action public resetStore = () => {
    Object.keys(this).map(key => {
      this[key] = null;
    });
  }
}

const assetStore = new AssetStore();
export default assetStore;
