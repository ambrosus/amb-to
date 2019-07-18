/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
 */
import {AssetService} from '../app/services/asset.service';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import {exampleAsset, exampleInfoEvent, exampleMultipleEvents} from './helpers/fixtures';
import {expectedMultipleEventsResponse} from './helpers/expectedAssetServiceResponses';

describe('Asset service', () => {
  let assetService: AssetService;
  const hermesUrls = ['http://hermes1.com', 'http://hermes2.com'];
  const exampleAssetId = exampleAsset.assetId;
  let mockAxios;

  beforeAll(() => {
    mockAxios = new MockAdapter(axios);
    assetService = new AssetService({
      HERMES_URLS: hermesUrls,
    });
  });

  describe('getAsset', () => {
    const formattedAsset = {
      ...exampleAsset,
      info: {
        ...exampleInfoEvent.content.data[0],
        action: 'info',
        author: exampleInfoEvent.content.idData.createdBy,
        eventId: exampleInfoEvent.eventId,
        type: 'info',
        groups: [{
          key: 'Product Information',
          value: exampleInfoEvent.content.data[0]['Product Information'],
        }, {
          key: 'Manufacturer Information',
          value: exampleInfoEvent.content.data[0]['Manufacturer Information'],
        }, {
          key: 'Brand Information',
          value: exampleInfoEvent.content.data[0]['Brand Information'],
        }],
        properties: [{
          key: 'author',
          value: '0x2FdB262f0716666Eb0CE32509DB19bE38e58Cd28',
        }, {
          key: 'action', value: 'info',
        }],
      },
    };

    test('finds asset on first hermes and adds info to it', async () => {
      mockAxios.onGet(`${hermesUrls[0]}/assets/${exampleAssetId}`).reply(200, exampleAsset);
      mockAxios.onGet(`${hermesUrls[0]}/assets/${exampleAssetId}/events`).reply(200, {results: [exampleInfoEvent]});

      expect(await assetService.getAsset(exampleAssetId)).toEqual(formattedAsset);
      expect(mockAxios.history.get.map(({url}) => url)).toEqual(['http://hermes1.com/assets/0x067222f6da44376a4b7acb57c6f1991cec307904818523e478cc49b734d43ab2',
        'http://hermes1.com/assets/0x067222f6da44376a4b7acb57c6f1991cec307904818523e478cc49b734d43ab2/events']);
    });

    test('finds asset on second hermes and adds info to it when first returns 404', async () => {
      mockAxios.onGet(`${hermesUrls[0]}/assets/${exampleAssetId}`).reply(404);
      mockAxios.onGet(`${hermesUrls[0]}/assets/${exampleAssetId}/events`).reply(404);
      mockAxios.onGet(`${hermesUrls[1]}/assets/${exampleAssetId}`).reply(200, exampleAsset);
      mockAxios.onGet(`${hermesUrls[1]}/assets/${exampleAssetId}/events`).reply(200, {results: [exampleInfoEvent]});

      expect(await assetService.getAsset(exampleAssetId)).toEqual(formattedAsset);
      expect(mockAxios.history.get.map(({url}) => url)).toEqual(['http://hermes1.com/assets/0x067222f6da44376a4b7acb57c6f1991cec307904818523e478cc49b734d43ab2',
        'http://hermes2.com/assets/0x067222f6da44376a4b7acb57c6f1991cec307904818523e478cc49b734d43ab2',
        'http://hermes2.com/assets/0x067222f6da44376a4b7acb57c6f1991cec307904818523e478cc49b734d43ab2/events']);
    });

    test('finds asset on second hermes and adds info to it when first throws network error', async () => {
      mockAxios.onGet(`${hermesUrls[0]}/assets/${exampleAssetId}`).networkError();
      mockAxios.onGet(`${hermesUrls[1]}/assets/${exampleAssetId}`).reply(200, exampleAsset);
      mockAxios.onGet(`${hermesUrls[1]}/assets/${exampleAssetId}/events`).reply(200, {results: [exampleInfoEvent]});
      expect(await assetService.getAsset(exampleAssetId)).toEqual(formattedAsset);
    });

    test('finds asset on second hermes and adds info to it when first times out', async () => {
      mockAxios.onGet(`${hermesUrls[0]}/assets/${exampleAssetId}`).timeout();
      mockAxios.onGet(`${hermesUrls[1]}/assets/${exampleAssetId}`).reply(200, exampleAsset);
      mockAxios.onGet(`${hermesUrls[1]}/assets/${exampleAssetId}/events`).reply(200, {results: [exampleInfoEvent]});
      expect(await assetService.getAsset(exampleAssetId)).toEqual(formattedAsset);
    });

    test('sets name to `Unknown asset` when info is missing', async () => {
      mockAxios.onGet(`${hermesUrls[0]}/assets/${exampleAssetId}`).reply(200, exampleAsset);
      mockAxios.onGet(`${hermesUrls[0]}/assets/${exampleAssetId}/events`).reply(200, {});
      expect(await assetService.getAsset(exampleAssetId)).toEqual({
        ...exampleAsset,
        info: {
          name: 'Unknown asset',
          groups: [],
          properties: [],
        },
      });
    });

    test('sets name to `Unknown asset` when events endpoint returns 404', async () => {
      mockAxios.onGet(`${hermesUrls[0]}/assets/${exampleAssetId}`).reply(200, exampleAsset);
      mockAxios.onGet(`${hermesUrls[0]}/assets/${exampleAssetId}/events`).reply(404);
      expect(await assetService.getAsset(exampleAssetId)).toEqual({
        ...exampleAsset,
        info: {
          name: 'Unknown asset',
          groups: [],
          properties: [],
        },
      });
    });
  });

  describe('getEvents', () => {
    test('find events of asset', async () => {
      mockAxios.onGet(`${hermesUrls[0]}/assets/${exampleAssetId}`).reply(200, exampleAsset);
      mockAxios.onGet(`${hermesUrls[0]}/assets/${exampleAssetId}/events`).reply(200, exampleMultipleEvents);
      expect(await assetService.getEvents(exampleAssetId)).toEqual(expectedMultipleEventsResponse);
    });

    test('find events of asset on second hermes when first hermes returns 404', async () => {
      mockAxios.onGet(`${hermesUrls[0]}/assets/${exampleAssetId}`).reply(404);
      mockAxios.onGet(`${hermesUrls[1]}/assets/${exampleAssetId}`).reply(200, exampleAsset);
      mockAxios.onGet(`${hermesUrls[1]}/assets/${exampleAssetId}/events`).reply(200, exampleMultipleEvents);
      expect(await assetService.getEvents(exampleAssetId)).toEqual(expectedMultipleEventsResponse);
    });
  });

  afterEach(() => {
    mockAxios.reset();
  });

  afterAll(() => {
    mockAxios.restore();
  });
});
