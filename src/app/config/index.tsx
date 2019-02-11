/*
Copyright: Ambrosus Technologies GmbH
Email: tech@ambrosus.com

This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0. If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.

This Source Code Form is “Incompatible With Secondary Licenses”, as defined by the Mozilla Public License, v. 2.0.
*/

const config = Object.freeze({
  MAPS_KEY: process.env.MAPS_KEY || '',
  API_ENDPOINT: process.env.API_ENDPOINT || 'https://gateway-test.ambrosus.com',
  NAMESPACE: 'amb_to_',
  EXTENDED_API: process.env.EXTENDED_API || 'https://hermes.ambrosus-test.com/extended',
});

export default config;