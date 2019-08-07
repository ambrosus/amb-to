/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
 */
import { StorageService } from '.';
import ambrosusSdk from 'ambrosus-javascript-sdk';
import { apiInstance } from '../utils';
import * as defaultConfig from '../config';

export class AssetService {
  private config;

  constructor(config) {
    this.config = config;
  }

  private async getAllHermeses() {
    const explorerUrl = this.config.EXPLORER_URL;
    try {
      const response = await apiInstance.getRequest(`${explorerUrl}/hermeses`);
      if (response.status === 200) {
        return response.data;
      }
    // tslint:disable-next-line:no-empty
    } catch {}
  }

  public async getHermesesUrls() {
    const hermeses = await this.getAllHermeses();
    const hermesUrls: string[] = [];
    for (const hermes of hermeses.data) {
      hermesUrls.push(hermes['url']);
    }
    return hermesUrls;
  }

  private async findAssetOnAllHermeses(assetId: string): Promise<{
    url: string;
    asset: any;
  }> {
    const urls = await this.getHermesesUrls();
    for (const hermesUrl of urls) {
      const getAssetUrl = `${hermesUrl}/assets/${assetId}`;
      try {
        const response = await apiInstance.getRequest(getAssetUrl);
        if (response.status === 200) {
          return { url: hermesUrl, asset: response.data };
        }
      // tslint:disable-next-line:no-empty
      } catch {}
    }
    throw new Error('No Asset');
  }

  private async findEventOnAllHermeses(eventId: string): Promise<{
    url: string;
    event: any;
  }> {
    const urls = await this.getHermesesUrls();
    for (const hermesUrl of urls) {
      const getEventUrl = `${hermesUrl}/events/${eventId}`;
      try {
        const response = await apiInstance.getRequest(getEventUrl);
        if (response.status === 200) {
          return {url: hermesUrl, event: response.data};
        }
      // tslint:disable-next-line:no-empty
      } catch {}
    }
    throw new Error('No Event');
  }

  private async addInfoToAsset(asset: any, url: string) {
    try {
      const infoEvent = (await this.getEvents(asset.assetId, url)).info;
      return {
        ...asset,
        info: infoEvent || {name: 'Unknown asset'},
      };
    } catch {
      return {
        ...asset,
        info: {name: 'Unknown asset'},
      };
    }
  }

  public async getAsset(assetId: string) {
    const {url, asset} = await this.findAssetOnAllHermeses(assetId);
    const assetWithInfo = await this.addInfoToAsset(asset, url);
    this.addHistory(assetWithInfo.info.name || '', assetId);
    ambrosusSdk.utils.parseAsset(assetWithInfo);
    return assetWithInfo;
  }

  public async getBranding(assetId: string) {
    const {url} = await this.findAssetOnAllHermeses(assetId);
    const events = await this.getEvents(assetId, url);
    return events.branding || {};
  }

  public async getEvent(eventId: string) {
    const {event} = await this.findEventOnAllHermeses(eventId);
    return event;
  }

  public async getEvents(assetId: string, hermesUrl?: string) {
    const url = hermesUrl || (await this.findAssetOnAllHermeses(assetId)).url;
    const eventsResponse = await apiInstance.getRequest(`${url}/assets/${assetId}/events`);
    if (eventsResponse.status !== 200 || !eventsResponse.data || !eventsResponse.data.results) {
      throw new Error('Wrong events request');
    }
    const data = {
      results: [...eventsResponse.data.results],
    };
    const parsedEvents = ambrosusSdk.utils.parseEvents(data);
    parsedEvents.events.sort(
      ambrosusSdk.utils.sortEventsByTimestamp
    );
    return parsedEvents;
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

const assetService = new AssetService(defaultConfig.default);
export default assetService;
