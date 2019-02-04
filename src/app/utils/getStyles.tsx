import store from '../store';
import convertStyles from './convertStyles';

const getStyles = (key: string) => {
  const asset = store.AssetStore.asset;
  const fStyles = {};
  try {
    let styles = asset.branding[key] || {};
    styles = Object.keys(styles).map((item: any) => {
      let tk = item;
      if (item.indexOf('-') !== -1) {
        const firstPart = item.split('-')[0];
        const lastPart = item.split('-')[1];
        tk = firstPart + lastPart.charAt(0).toUpperCase() + lastPart.substring(1);
      }
      fStyles[tk] = styles[item];
      return;
    });
    return convertStyles(fStyles);
  } catch (error) {
    return {};
  }
};

export default getStyles;
