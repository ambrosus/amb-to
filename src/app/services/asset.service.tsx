import config from '../config';
import { StorageService } from '.';
declare let AmbrosusSDK: any;

class AssetService {
  public ambrosus: any;

  constructor() {
    const apiEndpoint = config.API_ENDPOINT;
    this.ambrosus = new AmbrosusSDK({ apiEndpoint });
  }

  public getAsset(assetId: string) {
    return new Promise((resolve) => {
      this.ambrosus.getEvents({ assetId }).then((eventsArray: any) => {
        this.parseEvents(eventsArray.data).then((parsedData: any) => {
          resolve(this.handleRedirection(parsedData, assetId));
        });
      });
    });
  }

  public sortEventsByTimestamp(a: any, b: any) {
    if (a[1].timestamp > b[1].timestamp) {
      return -1;
    }
    if (a[1].timestamp < b[1].timestamp) {
      return 1;
    }
    return 0;
  }

  public handleRedirection(asset: any, assetId: string) {
    asset.events = Object.entries(asset.events)
      .sort(this.sortEventsByTimestamp)
      .reduce((array: any, event) => array.concat(event[1]), []);
    if (asset.redirection && this.isValidURL(asset.redirection.targetUrl)) {
      window.location.replace(asset.redirection.targetUrl);
      return false;
    }
    delete asset.redirection;
    try {
      this.addHistory(asset.info.name, assetId);
    } catch (error) {
      return asset;
    }
    return asset;
  }

  public addHistory(title: string, assetId: string) {
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

  public isValidURL(str: string) {
    const a = document.createElement('a');
    a.href = str;
    return a.host && a.host !== window.location.host;
  }

  public parseEvents(eventsArray: any) {
    return new Promise((resolve, reject) => {
      this.ambrosus
        .parseEvents(eventsArray)
        .then((response: any) => {
          resolve(response.data);
        })
        .catch((error: any) => {
          console.log('parseEvents: ', error);
          reject(error);
        });
    });
  }
}

const assetService = new AssetService();
export default assetService;
