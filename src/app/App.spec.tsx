import config from './config';

const urlRegExp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;

test('REACT_APP_MAPS_KEY environment variable is required', () => {
  expect(config.MAPS_KEY).toBeTruthy();
});

test('REACT_APP_EXTENDED_API environment variable is required', () => {
  expect(urlRegExp.test(config.EXTENDED_API)).toBe(true);
});

test('SENTRY_DSN variable is required', () => {
  expect(config.SENTRY_DSN).toBeTruthy();
});

test('REACT_APP_SENTRY_ENV environment variable is required', () => {
  expect(config.SENTRY_ENV).toBeTruthy();
});

// test('Explorer URL is required', () => {
//   expect(regexp.test(config.EXPLORER_URL)).toBe(true);
// });
