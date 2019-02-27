import config from './config';

const regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;

test('Google Maps API should be true', () => {
  expect(config.MAPS_KEY).toBeTruthy();
});

test('Extended API URL should be valid', () => {
  expect(regexp.test(config.EXTENDED_API)).toBe(true);
});

test('Sentry DSN should be valid', () => {
  expect(regexp.test(config.SENTRY_DSN)).toBe(true);
});

test('Sentry ENV should be true', () => {
  expect(config.SENTRY_ENV).toBeTruthy();
});

// test('Explorer URL should be valid', () => {
//   expect(regexp.test(config.EXPLORER_URL)).toBe(true);
// });

test('NODE_ENV should be production', () => {
  expect(process.env.NODE_ENV).toBe('production');
});
