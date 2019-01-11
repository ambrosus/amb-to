import config from '../config';

declare let AmbrosusSDK: any;

export default class AssetService {
  public ambrosus: any;

  constructor() {
    const apiEndpoint = config.API_ENDPOINT;
    this.ambrosus = new AmbrosusSDK({ apiEndpoint});
  }

  public getAsset(assetId: string) {
    return this.ambrosus.getAssetById(assetId);
  }

  public getEvent(eventId: string) {
    return this.ambrosus.getEventById(eventId);
  }

  public getEvents(assetId: string) {
    return this.ambrosus.getEvents({assetId});
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
