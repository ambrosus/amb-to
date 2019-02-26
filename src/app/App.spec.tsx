import config from './config';

test('Google Maps API should be true', () => {
  expect(config.MAPS_KEY).toBeTruthy();
});

test('Extended API URL should be true', () => {
  expect(config.EXTENDED_API).toBeTruthy();
});

test('Sentry DSN should be true', () => {
  expect(config.SENTRY_DSN).toBeTruthy();
});

test('Sentry ENV should be true', () => {
  expect(config.SENTRY_ENV).toBeTruthy();
});
