import config from './config';

test('REACT_APP_MAPS_KEY environment variable is required', () => {
  expect(config.MAPS_KEY).toBeTruthy();
});

test('SENTRY_DSN variable is required', () => {
  expect(config.SENTRY_DSN).toBeTruthy();
});

test('REACT_APP_SENTRY_ENV environment variable is required', () => {
  expect(config.SENTRY_ENV).toBeTruthy();
});

test('Explorer URL is required', () => {
  expect(config.EXPLORER_URL).toBeTruthy();
});
