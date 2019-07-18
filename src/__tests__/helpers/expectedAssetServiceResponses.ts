export const expectedMultipleEventsResponse = {
  events:
    [{
      type: 'displayed',
      name: 'Displayed',
      'Displaying Information':
        {'Total volume': '50 boxes', 'Displaying Date': '10 May 2018'},
      timestamp: 1525972747,
      author: '0x2FdB262f0716666Eb0CE32509DB19bE38e58Cd28',
      action: 'displayed',
      eventId:
        '0x4a8406e2c42681aeee84d1ade051a781e2abba3b0636749baa7cccb8f8c25a96',
      location:
        {
          type: 'location',
          checkpoint: 'Whiskey River',
          location:
            {
              type: 'Feature',
              geometry: {type: 'Point', coordinates: [29.9621546, -95.5466907]},
            },
          name: 'Whiskey River',
          city: 'Houston',
          country: 'Texas, USA',
          locationId: '809c578721b74cae1d56504594819285',
          GLN: 9501101530003,
          timestamp: 1525972747,
          author: '0x2FdB262f0716666Eb0CE32509DB19bE38e58Cd28',
          action: 'location',
          eventId:
            '0x4a8406e2c42681aeee84d1ade051a781e2abba3b0636749baa7cccb8f8c25a96',
        },
    },
      {
        type: 'received',
        name: 'Warehouse Inspection',
        'Inspection Information':
          {'Total volume': '500 boxes', 'Dispatch Date': '26 Mar 2018'},
        timestamp: 1522054929,
        author: '0x2FdB262f0716666Eb0CE32509DB19bE38e58Cd28',
        action: 'received',
        eventId:
          '0x571dae25f25329a14adbdf0ab5924d40436870c3fcdaf43e002d21832c09344a',
        location:
          {
            type: 'location',
            checkpoint: 'Galveston',
            location:
              {
                type: 'Feature',
                geometry: {type: 'Point', coordinates: [45.8226165, 8.749495]},
              },
            name: 'Galveston',
            city: 'Galveston',
            country: 'Texas, USA',
            locationId: '809c578721b74cae1d56504594819285',
            GLN: 9501101530003,
            timestamp: 1522054929,
            author: '0x2FdB262f0716666Eb0CE32509DB19bE38e58Cd28',
            action: 'location',
            eventId:
              '0x571dae25f25329a14adbdf0ab5924d40436870c3fcdaf43e002d21832c09344a',
          },
      },
      {
        type: 'imported',
        name: 'Product Imported',
        'Export Information':
          {'Total volume': '500 boxes', 'Arrival Date': '5 Feb 2018'},
        timestamp: 1517826665,
        author: '0x2FdB262f0716666Eb0CE32509DB19bE38e58Cd28',
        action: 'imported',
        eventId:
          '0x58ae502900509da67db5ad5485920dcc3d25297e1e3a430651fe7cddfc76e9fa',
        location:
          {
            type: 'location',
            checkpoint: 'Galveston',
            location:
              {
                type: 'Feature',
                geometry: {type: 'Point', coordinates: [45.8226165, 8.749495]},
              },
            name: 'Galveston',
            city: 'Galveston',
            country: 'Texas, USA',
            locationId: '809c578721b74cae1d56504594819285',
            GLN: 9501101530003,
            timestamp: 1517826665,
            author: '0x2FdB262f0716666Eb0CE32509DB19bE38e58Cd28',
            action: 'location',
            eventId:
              '0x58ae502900509da67db5ad5485920dcc3d25297e1e3a430651fe7cddfc76e9fa',
          },
      },
      {
        type: 'inspected',
        name: 'Post-shipment Inspection',
        'Inspection Information':
          {
            'Total volume': '500 boxes',
            'Inspection Date': '10 Jan 2018',
          },
        timestamp: 1515580265,
        author: '0x2FdB262f0716666Eb0CE32509DB19bE38e58Cd28',
        action: 'inspected',
        eventId:
          '0xf623283137d006ee81d3b39fedd1a6d25ca2599f64c92c7ddd539d1a865ac039',
        location:
          {
            type: 'location',
            checkpoint: 'Brick, New Jersey',
            location:
              {
                type: 'Feature',
                geometry: {type: 'Point', coordinates: [40.0692366, -74.1758856]},
              },
            name: 'Brick',
            city: 'New Jersey',
            country: 'USA',
            locationId: '809c578721b74cae1d56504594819285',
            GLN: 9501101530003,
            timestamp: 1515580265,
            author: '0x2FdB262f0716666Eb0CE32509DB19bE38e58Cd28',
            action: 'location',
            eventId:
              '0xf623283137d006ee81d3b39fedd1a6d25ca2599f64c92c7ddd539d1a865ac039',
          },
      },
      {
        type: 'exported',
        name: 'Product Exported',
        'Export Information':
          {'Total volume': '500 boxes', 'Export Date': '24 Dec 2017'},
        timestamp: 1514100665,
        author: '0x2FdB262f0716666Eb0CE32509DB19bE38e58Cd28',
        action: 'exported',
        eventId:
          '0x119aff1386b31e162749d74d56c87b3275eed76a14a342f79d36560935ea3c84',
        location:
          {
            type: 'location',
            location:
              {
                type: 'Feature',
                geometry: {type: 'Point', coordinates: [55.1999442, -6.5290512]},
              },
            name: 'Old Bushmills Distillery',
            city: '2 Distillery Rd, Bushmills',
            country: 'County Antrim BT57 8XH, UK',
            locationId: '809c578721b74cae1d56504594819285',
            GLN: 9501101530003,
            timestamp: 1514100665,
            author: '0x2FdB262f0716666Eb0CE32509DB19bE38e58Cd28',
            action: 'location',
            eventId:
              '0x119aff1386b31e162749d74d56c87b3275eed76a14a342f79d36560935ea3c84',
          },
      },
      {
        type: 'manufactured',
        name: 'Product Manufactured',
        description:
          'Bushmills Single Malt Whiskey 21 year old is aged for a minimum of 19 years in former Oloroso Sherry and Bourbon-seasoned casks, then transferred into Madeira casks for a further 2 years',
        timestamp: 1498894260,
        author: '0x2FdB262f0716666Eb0CE32509DB19bE38e58Cd28',
        action: 'manufactured',
        eventId:
          '0x376dc12a5053fae3ee78f574ecd39a75b065c3774c776a77fb31767651dd466c',
        location:
          {
            type: 'location',
            location:
              {
                type: 'Feature',
                geometry: {type: 'Point', coordinates: [55.1999442, -6.5290512]},
              },
            name: 'Old Bushmills Distillery',
            city: '2 Distillery Rd, Bushmills',
            country: 'County Antrim BT57 8XH, UK',
            locationId: '809c578721b74cae1d56504594819285',
            GLN: 9501101530003,
            timestamp: 1498894260,
            author: '0x2FdB262f0716666Eb0CE32509DB19bE38e58Cd28',
            action: 'location',
            eventId:
              '0x376dc12a5053fae3ee78f574ecd39a75b065c3774c776a77fb31767651dd466c',
          },
      }],
  identifiers:
    {
      type: 'identifiers',
      identifiers: {'Production code': ['L0128']},
      timestamp: 1531389862,
      author: '0x2FdB262f0716666Eb0CE32509DB19bE38e58Cd28',
      name: 'identifiers',
      action: 'identifiers',
      eventId:
        '0x07748ee4ebcc6edf5397a349dc41110069af71651acf20c1fe7eaf603eb028cf',
    },
  info:
    {
      type: 'info',
      name: 'Bushmills Single Malt 21 year old 70cl',
      assetType: 'info',
      images:
        {
          default:
            {
              url:
                'https://molloys.ie/media/catalog/product/cache/1/image/1200x1200/9df78eab33525d08d6e5fb8d27136e95/b/u/bush_21.png',
            },
        },
      'Product Information':
        {
          Description:
            'Bushmills Single Malt Whiskey 21 year old is aged for a minimum of 19 years in former Oloroso Sherry and Bourbon-seasoned casks, then transferred into Madeira casks for a further 2 years. The result is a whiskey awarded ‘Best Irish Single Malt 2013’. It has huge depth that interweaves dried fruit flavors with spicy, aromatic maltiness and subtle nutty raisins notes.',
          'Country of origin': 'Ireland',
          'Country of Packing': 'Ireland',
        },
      'Manufacturer Information':
        {
          manufacturer: 'Bushmills',
          location:
            'Old Bushmills Distillery, 2 Distillery Rd, Bushmills, County Antrim BT57 8XH, UK',
        },
      'Brand Information':
        {
          brand: 'Bushmills',
          logo:
            'https://57zzs4cvfhh3mku6h41aauwa-wpengine.netdna-ssl.com/wp-content/themes/bushmills/images/logo.png',
          website: 'bushmills.com',
        },
      timestamp: 1531389862,
      author: '0x2FdB262f0716666Eb0CE32509DB19bE38e58Cd28',
      action: 'info',
      eventId:
        '0x07748ee4ebcc6edf5397a349dc41110069af71651acf20c1fe7eaf603eb028cf',
    },
  branding:
    {
      type: 'branding',
      name: 'Branding',
      nav:
        {
          background: '#a71f24',
          color: '#fff',
          'border-bottom': '1px solid #ddd',
        },
      logo:
        {
          url:
            'https://57zzs4cvfhh3mku6h41aauwa-wpengine.netdna-ssl.com/wp-content/themes/bushmills/images/logo.png',
          height: '40px',
        },
      content: {background: '#fff', color: '#333'},
      components: {background: '#fbfbfb', color: '#333'},
      footer:
        {
          background: '#f1e5c6',
          color: '#000',
          'border-top': '1px solid #eee',
        },
      components_subtitles:
        {
          background: '#a71f24',
          'border-bottom': '1px solid #e2e2e2',
          'padding-top': '10px',
          'padding-bottom': '10px',
          'font-size': '12px',
          color: '#fff',
        },
      components_keys:
        {
          'font-size': '12px',
          color: '#222',
          'vertical-align': 'top',
          'font-weight': '700',
        },
      components_values:
        {
          'font-size': '12px',
          'line-height': '1.8',
          color: '#222',
          'vertical-align': 'top',
          'font-weight': '100',
        },
      components_titles:
        {
          'border-bottom': '1px solid #e2e2e2',
          'font-weight': '400',
          color: '#222',
          'padding-top': '0px',
          'padding-bottom': '10px',
        },
      timestamp: 1531224566,
      author: '0x2FdB262f0716666Eb0CE32509DB19bE38e58Cd28',
      action: 'branding',
      eventId:
        '0x3f995d13cca0b0462387dd6ddead376b979f4a9c7ed15656ea9ab5fe68b31b0c',
    },
};
