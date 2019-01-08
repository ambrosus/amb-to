declare let AmbrosusSDK: any;

export default class AssetService {
  ambrosus: any;

  constructor() {
    const apiEndpoint = 'https://gateway-test.ambrosus.com';
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
