import Loadable from 'react-loadable';
import { Loader } from '../components';

/**
 * Lazy load a component
 *
 * @param {any} func
 *
 * @returns {any}
 */
const lazyLoad = (func: any): any =>
  Loadable({
    loading: Loader,
    loader: func,
    delay: 300,
  });

export default lazyLoad;
