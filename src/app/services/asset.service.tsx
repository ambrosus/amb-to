import config from '../config';
import { StorageService } from '.';
import * as AmbrosusSDK from 'ambrosus-javascript-sdk';
import { api } from '../utils';

class AssetService {
  public ambrosus: any;
  public json = {
    asset: {},
    event: {},
  };

  constructor() {
    const apiEndpoint = config.API_ENDPOINT;
    this.ambrosus = new AmbrosusSDK({ apiEndpoint });
  }

  public getSingleAsset(assetId: string) {
    const assetURl = `${config.EXTENDED_API}/asset/query`;
    const infoURL = `${config.EXTENDED_API}/event/latest/type`;
    const assetBody = {
      query: [
        {
          field: 'assetId',
          value: assetId,
          operator: 'equal',
        },
      ],
    };
    const infoBody = {
      type: 'ambrosus.asset.info',
      assets: [assetId],
    };
    return new Promise((resolve, reject) => {
      api.postRequest(assetURl, assetBody).then(response => {
        const assets = response.data;
        if (!assets.data || !Array.isArray(assets.data) || !assets.data.length) {
          reject('No Asset');
        }

        api.postRequest(infoURL, infoBody).then(response1 => {
          const info = this.ambrosus.utils.findEvent('info', response1.data.data);
          this.json.asset = JSON.parse(JSON.stringify(response1.data.data[0] || {}));
          assets.data[0]['info'] = info;
          this.ambrosus.utils.parseAsset(assets.data[0]);
          this.addHistory(assets.data[0].info.name, assetId);
          resolve(assets.data[0]);
        }).catch(err => {
          reject(err);
        });
      }).catch(err => {
        reject(err);
      });
    });
  }

  public getEvent(eventId: string) {
    const eventURL = `${config.EXTENDED_API}/event/${eventId}`;
    return new Promise((resolve, reject) => {
      api.getRequest(eventURL).then(response => {
        const events = response.data;
        if (Object.keys(events.data).length) {
          const data = {
            results: [events.data],
          };
          const result = this.ambrosus.utils.parseEvents(data);
          resolve(result.events[0]);
        }
        reject('No Data');
      }).catch(err => {
        reject(err);
      });
    });
  }

  public getEvents(options: {
    assetId: string;
    limit?: number;
    next?: string;
  }) {
    return new Promise((resolve, reject) => {
      const { assetId, limit = 10, next } = options;
      const eventURL = `${config.EXTENDED_API}/event/query`;
      const body: any = {
        limit,
        next,
        query: [
          {
            field: 'content.idData.assetId',
            value: assetId,
            operator: 'equal',
          },
        ],
      };

      api.postRequest(eventURL, body).then(response => {
        const data = {
          results: [...response.data.data],
        };
        const result = this.ambrosus.utils.parseEvents(data);
        const details = {
          pagination: response.data.pagination,
          brandings: result.branding,
          events: result.events.sort((a: any, b: any) => a.timestamp - b.timestamp).reverse(),
        };
        resolve(details);
      }).catch(err => {
        reject(err);
      });
    });
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
          reject(error);
        });
    });
  }
}

const assetService = new AssetService();
export default assetService;
