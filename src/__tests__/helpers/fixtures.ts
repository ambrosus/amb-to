/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
 */
export const exampleAsset = {
  content: {
    idData: {
      timestamp: 1538060288,
      sequenceNumber: 1,
      createdBy: '0x2FdB262f0716666Eb0CE32509DB19bE38e58Cd28',
    },
    signature: '0x48d68664e7129fe6e067b7f298de38f49f78f0634245a3251765bf7924519b0837a5a2238ef727c8496c37cf57568063abce7b5d95e66e0948da85eac00998981c',
  },
  assetId: '0x067222f6da44376a4b7acb57c6f1991cec307904818523e478cc49b734d43ab2',
  metadata: {
    bundleId: '0xe9c2519661ea0b4dfcb93fbeab1aae0f54be4eaa22f952bf09b7d1f5ce92e0a9',
    bundleProofBlock: 140294,
    bundleTransactionHash: '0x93c64e885616a5553c4d45473555fe49e5d0973af9915046e5d1b6dda6ef4d4d',
    bundleUploadTimestamp: 1554904910,
  },
};

export const exampleInfoEvent = {
  content: {
    idData: {
      assetId: '0x067222f6da44376a4b7acb57c6f1991cec307904818523e478cc49b734d43ab2',
      timestamp: 1531389862,
      accessLevel: 0,
      createdBy: '0x2FdB262f0716666Eb0CE32509DB19bE38e58Cd28',
      dataHash: '0x610a7612c634f92a4788c8d3f054825b66ee00902edf584ab6a5b61b80e1267f',
    },
    signature: '0x3ae96a5576a78630b1831a069f2bd3498ab0097f0e7886d2474a2c8cf75c56c0545e46b5c35663508de9c4d782ccf06eb3f63c9d5481ee7c2aea9f7b02f19ac31b',
    data: [
      {
        type: 'ambrosus.asset.info',
        name: 'Bushmills Single Malt 21 year old 70cl',
        assetType: 'info',
        images: {
          'default': {
            url: 'https://molloys.ie/media/catalog/product/cache/1/image/1200x1200/9df78eab33525d08d6e5fb8d27136e95/b/u/bush_21.png',
          },
        },
        'Product Information': {
          Description: 'Bushmills Single Malt Whiskey 21 year old is aged for a minimum of 19 years in former Oloroso Sherry and Bourbon-seasoned casks, then transferred into Madeira casks for a further 2 years. The result is a whiskey awarded ‘Best Irish Single Malt 2013’. It has huge depth that interweaves dried fruit flavors with spicy, aromatic maltiness and subtle nutty raisins notes.',
          'Country of origin': 'Ireland',
          'Country of Packing': 'Ireland',
        },
        'Manufacturer Information': {
          manufacturer: 'Bushmills',
          location: 'Old Bushmills Distillery, 2 Distillery Rd, Bushmills, County Antrim BT57 8XH, UK',
        },
        'Brand Information': {
          brand: 'Bushmills',
          logo: 'https://57zzs4cvfhh3mku6h41aauwa-wpengine.netdna-ssl.com/wp-content/themes/bushmills/images/logo.png',
          website: 'bushmills.com',
        },
        timestamp: 1531389862,
      },
    ],
  },
  eventId: '0x07748ee4ebcc6edf5397a349dc41110069af71651acf20c1fe7eaf603eb028cf',
  metadata: {
    bundleId: '0xe046ba2bea7631c9190fdd6fee8f008449d9eec11f24cf91bebaafb1104b9ea4',
    bundleProofBlock: 153604,
    bundleTransactionHash: '0xce8220e230334db1b37466d65254d64d0d911e2045217668056ca65e776af04f',
    bundleUploadTimestamp: 1554971525,
  },
};

export const exampleMultipleEvents = {
  results: [
    {
      content: {
        idData: {
          assetId: '0x067222f6da44376a4b7acb57c6f1991cec307904818523e478cc49b734d43ab2',
          timestamp: 1531389862,
          accessLevel: 0,
          createdBy: '0x2FdB262f0716666Eb0CE32509DB19bE38e58Cd28',
          dataHash: '0x610a7612c634f92a4788c8d3f054825b66ee00902edf584ab6a5b61b80e1267f',
        },
        signature: '0x3ae96a5576a78630b1831a069f2bd3498ab0097f0e7886d2474a2c8cf75c56c0545e46b5c35663508de9c4d782ccf06eb3f63c9d5481ee7c2aea9f7b02f19ac31b',
        data: [
          {
            type: 'ambrosus.asset.identifiers',
            identifiers: {
              'Production code': [
                'L0128',
              ],
            },
          },
          {
            type: 'ambrosus.asset.info',
            name: 'Bushmills Single Malt 21 year old 70cl',
            assetType: 'info',
            images: {
              'default': {
                url: 'https://molloys.ie/media/catalog/product/cache/1/image/1200x1200/9df78eab33525d08d6e5fb8d27136e95/b/u/bush_21.png',
              },
            },
            'Product Information': {
              Description: 'Bushmills Single Malt Whiskey 21 year old is aged for a minimum of 19 years in former Oloroso Sherry and Bourbon-seasoned casks, then transferred into Madeira casks for a further 2 years. The result is a whiskey awarded ‘Best Irish Single Malt 2013’. It has huge depth that interweaves dried fruit flavors with spicy, aromatic maltiness and subtle nutty raisins notes.',
              'Country of origin': 'Ireland',
              'Country of Packing': 'Ireland',
            },
            'Manufacturer Information': {
              manufacturer: 'Bushmills',
              location: 'Old Bushmills Distillery, 2 Distillery Rd, Bushmills, County Antrim BT57 8XH, UK',
            },
            'Brand Information': {
              brand: 'Bushmills',
              logo: 'https://57zzs4cvfhh3mku6h41aauwa-wpengine.netdna-ssl.com/wp-content/themes/bushmills/images/logo.png',
              website: 'bushmills.com',
            },
            timestamp: 1531389862,
          },
        ],
      },
      eventId: '0x07748ee4ebcc6edf5397a349dc41110069af71651acf20c1fe7eaf603eb028cf',
      metadata: {
        bundleId: '0xe046ba2bea7631c9190fdd6fee8f008449d9eec11f24cf91bebaafb1104b9ea4',
        bundleProofBlock: 153604,
        bundleTransactionHash: '0xce8220e230334db1b37466d65254d64d0d911e2045217668056ca65e776af04f',
        bundleUploadTimestamp: 1554971525,
      },
    },
    {
      content: {
        idData: {
          assetId: '0x067222f6da44376a4b7acb57c6f1991cec307904818523e478cc49b734d43ab2',
          timestamp: 1531224566,
          accessLevel: 0,
          createdBy: '0x2FdB262f0716666Eb0CE32509DB19bE38e58Cd28',
          dataHash: '0x854e145876e1aea06ec6e6386e723dfab40c102723934bdaffa0165b087d3bd0',
        },
        signature: '0x874543a2b2acde1b0149860f5357d6d7dd00d661222acbf9cb0f9afe0f467b40246d2d50c8feaa95b6605f62e8fcd565d558d143094acf15256603e25004f1261b',
        data: [
          {
            type: 'ambrosus.asset.branding',
            name: 'Branding',
            nav: {
              background: '#a71f24',
              color: '#fff',
              'border-bottom': '1px solid #ddd',
            },
            logo: {
              url: 'https://57zzs4cvfhh3mku6h41aauwa-wpengine.netdna-ssl.com/wp-content/themes/bushmills/images/logo.png',
              height: '40px',
            },
            content: {
              background: '#fff',
              color: '#333',
            },
            components: {
              background: '#fbfbfb',
              color: '#333',
            },
            footer: {
              background: '#f1e5c6',
              color: '#000',
              'border-top': '1px solid #eee',
            },
            components_subtitles: {
              background: '#a71f24',
              'border-bottom': '1px solid #e2e2e2',
              'padding-top': '10px',
              'padding-bottom': '10px',
              'font-size': '12px',
              color: '#fff',
            },
            components_keys: {
              'font-size': '12px',
              color: '#222',
              'vertical-align': 'top',
              'font-weight': '700',
            },
            components_values: {
              'font-size': '12px',
              'line-height': '1.8',
              color: '#222',
              'vertical-align': 'top',
              'font-weight': '100',
            },
            components_titles: {
              'border-bottom': '1px solid #e2e2e2',
              'font-weight': '400',
              color: '#222',
              'padding-top': '0px',
              'padding-bottom': '10px',
            },
            timestamp: 1531224566,
            author: '0x0588facCEe2Fd6c6b4BC775Ce2d1181FA6D02e1d',
            action: 'branding',
            eventId: '0x524b259b5ebe0347a2dfe5c69b93ef1afd04844baf5f05d8b47cb94997d2cf3f',
          },
        ],
      },
      eventId: '0x3f995d13cca0b0462387dd6ddead376b979f4a9c7ed15656ea9ab5fe68b31b0c',
      metadata: {
        bundleId: '0xe046ba2bea7631c9190fdd6fee8f008449d9eec11f24cf91bebaafb1104b9ea4',
        bundleProofBlock: 153604,
        bundleTransactionHash: '0xce8220e230334db1b37466d65254d64d0d911e2045217668056ca65e776af04f',
        bundleUploadTimestamp: 1554971525,
      },
    },
    {
      content: {
        idData: {
          assetId: '0x067222f6da44376a4b7acb57c6f1991cec307904818523e478cc49b734d43ab2',
          timestamp: 1525972747,
          accessLevel: 0,
          createdBy: '0x2FdB262f0716666Eb0CE32509DB19bE38e58Cd28',
          dataHash: '0xc0b7e570e6a4423b0e70ad8399e293a2647f008d1c414e163530bad237f1d813',
        },
        signature: '0x27d500cca2a24466323a207381180001d7e6b36c17937ef61bc49b8a9296fbb27f1c34325fe3452de4fcc0d7b28bc1b5fd599ad519b818d35583acae67b254181c',
        data: [
          {
            type: 'ambrosus.asset.displayed',
            name: 'Displayed',
            'Displaying Information': {
              'Total volume': '50 boxes',
              'Displaying Date': '10 May 2018',
            },
            timestamp: 1525972747,
          },
          {
            type: 'ambrosus.event.location',
            checkpoint: 'Whiskey River',
            location: {
              type: 'Feature',
              geometry: {
                type: 'Point',
                coordinates: [
                  29.9621546,
                  -95.5466907,
                ],
              },
            },
            name: 'Whiskey River',
            city: 'Houston',
            country: 'Texas, USA',
            locationId: '809c578721b74cae1d56504594819285',
            GLN: 9501101530003,
            timestamp: 1525972747,
          },
        ],
      },
      eventId: '0x4a8406e2c42681aeee84d1ade051a781e2abba3b0636749baa7cccb8f8c25a96',
      metadata: {
        bundleId: '0xe803d7b35bb157d6ab18d96f33b1485a5309e10274822c8bf6a44dfb6f985418',
        bundleProofBlock: 153602,
        bundleTransactionHash: '0x8b7499c53b80d2911e1a9ccbd2ef8725f50f9f685e3bf213a9d6ea9d8b76523f',
        bundleUploadTimestamp: 1554971515,
      },
    },
    {
      content: {
        idData: {
          assetId: '0x067222f6da44376a4b7acb57c6f1991cec307904818523e478cc49b734d43ab2',
          timestamp: 1522054929,
          accessLevel: 0,
          createdBy: '0x2FdB262f0716666Eb0CE32509DB19bE38e58Cd28',
          dataHash: '0x95b3e3fb765e0954664a1ef0fb372a10c8d865d21eb84144bc7c240d7370a482',
        },
        signature: '0x018f2abc0d6dee11a85fcd6e24616dab6ff9f5cf4baef219ebe6c8e6442cb0dd74fc458d69fee869d4c6bf37f1a4c82008eb97611d5da82e3ad3afb13d747bfb1c',
        data: [
          {
            type: 'ambrosus.asset.received',
            name: 'Warehouse Inspection',
            'Inspection Information': {
              'Total volume': '500 boxes',
              'Dispatch Date': '26 Mar 2018',
            },
            timestamp: 1522054929,
          },
          {
            type: 'ambrosus.event.location',
            checkpoint: 'Galveston',
            location: {
              type: 'Feature',
              geometry: {
                type: 'Point',
                coordinates: [
                  45.8226165,
                  8.749495,
                ],
              },
            },
            name: 'Galveston',
            city: 'Galveston',
            country: 'Texas, USA',
            locationId: '809c578721b74cae1d56504594819285',
            GLN: 9501101530003,
            timestamp: 1522054929,
          },
        ],
      },
      eventId: '0x571dae25f25329a14adbdf0ab5924d40436870c3fcdaf43e002d21832c09344a',
      metadata: {
        bundleId: '0xe803d7b35bb157d6ab18d96f33b1485a5309e10274822c8bf6a44dfb6f985418',
        bundleProofBlock: 153602,
        bundleTransactionHash: '0x8b7499c53b80d2911e1a9ccbd2ef8725f50f9f685e3bf213a9d6ea9d8b76523f',
        bundleUploadTimestamp: 1554971515,
      },
    },
    {
      content: {
        idData: {
          assetId: '0x067222f6da44376a4b7acb57c6f1991cec307904818523e478cc49b734d43ab2',
          timestamp: 1517826665,
          accessLevel: 0,
          createdBy: '0x2FdB262f0716666Eb0CE32509DB19bE38e58Cd28',
          dataHash: '0xd99a5c2a780cf777b781703961b4e8e5d8b031a8fe6c03f1d63d0d6b9efe0a8d',
        },
        signature: '0x3c2a90e1a557a9eae243fd5d34ce9d1d3b107eb6bb668b4bd9b78a0820e471ec4e5f9bc7f1a2ac6005c1e236589e76f740da41b5a796f597876f04ec2edf1b841b',
        data: [
          {
            type: 'ambrosus.asset.imported',
            name: 'Product Imported',
            'Export Information': {
              'Total volume': '500 boxes',
              'Arrival Date': '5 Feb 2018',
            },
            timestamp: 1517826665,
          },
          {
            type: 'ambrosus.event.location',
            checkpoint: 'Galveston',
            location: {
              type: 'Feature',
              geometry: {
                type: 'Point',
                coordinates: [
                  45.8226165,
                  8.749495,
                ],
              },
            },
            name: 'Galveston',
            city: 'Galveston',
            country: 'Texas, USA',
            locationId: '809c578721b74cae1d56504594819285',
            GLN: 9501101530003,
            timestamp: 1517826665,
          },
        ],
      },
      eventId: '0x58ae502900509da67db5ad5485920dcc3d25297e1e3a430651fe7cddfc76e9fa',
      metadata: {
        bundleId: '0x47100febadd6be28be5711a6a2f3ff049e226d0ab84f05507807f01b18470056',
        bundleProofBlock: 153601,
        bundleTransactionHash: '0x2733bb03f7ae7f7878e6ec701a82beab2dd73df46f18fe1b6dab9de3b7ff287a',
        bundleUploadTimestamp: 1554971510,
      },
    },
    {
      content: {
        idData: {
          assetId: '0x067222f6da44376a4b7acb57c6f1991cec307904818523e478cc49b734d43ab2',
          timestamp: 1515580265,
          accessLevel: 0,
          createdBy: '0x2FdB262f0716666Eb0CE32509DB19bE38e58Cd28',
          dataHash: '0xc225ef95e7f1157bb68cbb8032c6bb71d6295955d0fb70ac123820e86eac616b',
        },
        signature: '0x6fa0c08ec611f92f6a4784ed18584f34aed2bb7f8484a3a4fba59912ce696fbb1df04a8e7f8f4b52418cd8723b8fb868d575563d5ef25365eca5dfbb07a0a2651c',
        data: [
          {
            type: 'ambrosus.asset.inspected',
            name: 'Post-shipment Inspection',
            'Inspection Information': {
              'Total volume': '500 boxes',
              'Inspection Date': '10 Jan 2018',
            },
            timestamp: 1515580265,
          },
          {
            type: 'ambrosus.event.location',
            checkpoint: 'Brick, New Jersey',
            location: {
              type: 'Feature',
              geometry: {
                type: 'Point',
                coordinates: [
                  40.0692366,
                  -74.1758856,
                ],
              },
            },
            name: 'Brick',
            city: 'New Jersey',
            country: 'USA',
            locationId: '809c578721b74cae1d56504594819285',
            GLN: 9501101530003,
            timestamp: 1515580265,
          },
        ],
      },
      eventId: '0xf623283137d006ee81d3b39fedd1a6d25ca2599f64c92c7ddd539d1a865ac039',
      metadata: {
        bundleId: '0x47100febadd6be28be5711a6a2f3ff049e226d0ab84f05507807f01b18470056',
        bundleProofBlock: 153601,
        bundleTransactionHash: '0x2733bb03f7ae7f7878e6ec701a82beab2dd73df46f18fe1b6dab9de3b7ff287a',
        bundleUploadTimestamp: 1554971510,
      },
    },
    {
      content: {
        idData: {
          assetId: '0x067222f6da44376a4b7acb57c6f1991cec307904818523e478cc49b734d43ab2',
          timestamp: 1514100665,
          accessLevel: 0,
          createdBy: '0x2FdB262f0716666Eb0CE32509DB19bE38e58Cd28',
          dataHash: '0x0d40bf0675b2bf7d5e84a226d7f0778651d355fcb47a47287a405aa07b5caf92',
        },
        signature: '0xb121b0f6a8d0e1ed180987fa88dcb643dc47ac9cb15b36ffcb2010ae1a93274c47babf8bf6926d679d046080fb2f00882305f7fc95287ccfbff553a24bfa2be91c',
        data: [
          {
            type: 'ambrosus.asset.exported',
            name: 'Product Exported',
            'Export Information': {
              'Total volume': '500 boxes',
              'Export Date': '24 Dec 2017',
            },
            timestamp: 1514100665,
          },
          {
            type: 'ambrosus.event.location',
            location: {
              type: 'Feature',
              geometry: {
                type: 'Point',
                coordinates: [
                  55.1999442,
                  -6.5290512,
                ],
              },
            },
            name: 'Old Bushmills Distillery',
            city: '2 Distillery Rd, Bushmills',
            country: 'County Antrim BT57 8XH, UK',
            locationId: '809c578721b74cae1d56504594819285',
            GLN: 9501101530003,
            timestamp: 1514100665,
          },
        ],
      },
      eventId: '0x119aff1386b31e162749d74d56c87b3275eed76a14a342f79d36560935ea3c84',
      metadata: {
        bundleId: '0x47100febadd6be28be5711a6a2f3ff049e226d0ab84f05507807f01b18470056',
        bundleProofBlock: 153601,
        bundleTransactionHash: '0x2733bb03f7ae7f7878e6ec701a82beab2dd73df46f18fe1b6dab9de3b7ff287a',
        bundleUploadTimestamp: 1554971510,
      },
    },
    {
      content: {
        idData: {
          assetId: '0x067222f6da44376a4b7acb57c6f1991cec307904818523e478cc49b734d43ab2',
          timestamp: 1498894260,
          accessLevel: 0,
          createdBy: '0x2FdB262f0716666Eb0CE32509DB19bE38e58Cd28',
          dataHash: '0x1c9ec741d468b81ed87047169565ac2a94e02cba90ed8b1f0d2867db0b251137',
        },
        signature: '0xdf0626e1a5a52f041e4491d0370a30cc98e4a386198e643b7c53aaa719f941fe300a9833e07e439633c73a25a37a648c0c47af70d95a25821ba13dacdc500b871c',
        data: [
          {
            type: 'ambrosus.asset.manufactured',
            name: 'Product Manufactured',
            description: 'Bushmills Single Malt Whiskey 21 year old is aged for a minimum of 19 years in former Oloroso Sherry and Bourbon-seasoned casks, then transferred into Madeira casks for a further 2 years',
            timestamp: 1498894260,
          },
          {
            type: 'ambrosus.event.location',
            location: {
              type: 'Feature',
              geometry: {
                type: 'Point',
                coordinates: [
                  55.1999442,
                  -6.5290512,
                ],
              },
            },
            name: 'Old Bushmills Distillery',
            city: '2 Distillery Rd, Bushmills',
            country: 'County Antrim BT57 8XH, UK',
            locationId: '809c578721b74cae1d56504594819285',
            GLN: 9501101530003,
            timestamp: 1498894260,
          },
        ],
      },
      eventId: '0x376dc12a5053fae3ee78f574ecd39a75b065c3774c776a77fb31767651dd466c',
      metadata: {
        bundleId: '0xa6ca6f099c35e64b448e34c9f7adde6b84178f30f40bfc763aa9575e016e4d1f',
        bundleProofBlock: 153592,
        bundleTransactionHash: '0xef6505c7e1fa708c970e0bea630d3f52ca2c8769cef0d7a8cbdb72461790b3a2',
        bundleUploadTimestamp: 1554971465,
      },
    },
  ],
  resultCount: 8,
};
