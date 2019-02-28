import config from '../config';
import { StorageService } from '.';
import * as AmbrosusSDK from 'ambrosus-javascript-sdk';
import { apiInstance } from '../utils';
import store from '../store';

class AssetService {
  public ambrosus: any;

  constructor() {
    this.ambrosus = new AmbrosusSDK();
  }

  public getHermes(assetId: string) {
    const url = `${config.EXPLORER_URL}/assets/${assetId}/hermes`;
    return new Promise((resolve, reject) => {
      apiInstance.getRequest(url).then(hermesResponse => {
        if (hermesResponse.data.data.length) {
          resolve(hermesResponse.data.data);
        }
        reject('No Asset');
      }).catch(err => reject(err));
    });
  }

  public getAsset(assetId: string) {
    const assetURl = `${store.AssetStore.hermesURL}/asset/query`;
    const infoURL = `${store.AssetStore.hermesURL}/event/latest/type`;
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
      apiInstance.postRequest(assetURl, assetBody).then(queryResponse => {
        const assets = queryResponse.data;
        if (!assets.data || !Array.isArray(assets.data) || !assets.data.length) {
          reject('No Asset');
        }

        apiInstance.postRequest(infoURL, infoBody).then(infoResponse => {
          const info = this.ambrosus.utils.findEvent('info', infoResponse.data.data);
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

  public getBranding(assetId: string) {
    return new Promise((resolve, reject) => {
      const brandingBody = {
        type: 'ambrosus.asset.branding',
        assets: [assetId],
      };
      const eventURL = `${store.AssetStore.hermesURL}/event/latest/type`;

      apiInstance.postRequest(eventURL, brandingBody).then(brandingResponse => {
        if (brandingResponse.data.data.length) {
          const brandings = this.ambrosus.utils.findEvent('branding', brandingResponse.data.data);
          resolve(brandings);
        }
        resolve({});
      }).catch(err => reject(err));
    });
  }

  public getEvent(eventId: string) {
    const eventURL = `${store.AssetStore.hermesURL}/event/${eventId}`;
    return new Promise((resolve, reject) => {
      apiInstance.getRequest(eventURL).then(eventResponse => {
        const events = eventResponse.data;
        if (Object.keys(events.data).length) {
          const data = {
            results: [events.data],
          };
          const parsedEvents = this.ambrosus.utils.parseEvents(data);
          resolve(parsedEvents.events[0]);
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
      const eventURL = `${store.AssetStore.hermesURL}/event/query`;
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

      apiInstance.postRequest(eventURL, body).then(eventsResponse => {
        const data = {
          results: [...eventsResponse.data.data],
        };
        const parsedEvents = this.ambrosus.utils.parseEvents(data);
        const details = {
          pagination: eventsResponse.data.pagination,
          events: parsedEvents.events.sort(this.ambrosus.utils.sortEventsByTimestamp),
        };
        resolve(details);
      }).catch(err => {
        reject(err);
      });
    });
  }

  public addHistory(title: string, assetId: string) {
    const history = { title, id: assetId };
    const tempHistory: any = StorageService.get('history');
    if (tempHistory && tempHistory.length > 0) {
      const newHistory = tempHistory.filter((e: any) => e.id !== assetId);
      newHistory.unshift(history);
      StorageService.set('history', newHistory);
    } else {
      StorageService.set('history', [history]);
    }
  }
}

const assetService = new AssetService();
export default assetService;
