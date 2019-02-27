import * as Sentry from '@sentry/browser';

const is_url = (str: string) => {
  const regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
  return !!regexp.test(str);
};

/**
 * Generate anchor tags for URL string
 *
 * @param {string} url
 *
 * @returns {string}
 */
const generateLink = (url: string) => {
  try {
    const testURL = url.toString().indexOf('url:') > -1 ? url.split('url:')[1] : url;
    if (is_url(testURL.toString().trim())) {
      return `<a target="_blank" href="${testURL}">${url}</a>`;
    }
    return url;
  } catch (error) {
    Sentry.captureException(error);
    return '';
  }
};

export default generateLink;
