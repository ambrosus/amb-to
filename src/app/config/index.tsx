/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
 */

const config = Object.freeze({
  MAPS_KEY: process.env.REACT_APP_MAPS_KEY || '',
  NAMESPACE: 'amb_to_',
  SENTRY_DSN: process.env.REACT_APP_SENTRY_DSN || '',
  SENTRY_ENV: process.env.REACT_APP_SENTRY_ENV || 'dev',
  EXPLORER_URL: process.env.REACT_APP_EXPLORER_URL || '',
  HERMES_URL:
    process.env.REACT_APP_HERMES_URL ||
    'https://hermes.ambrosus-dev.com/extended',
});

export default config;
