import { ComponentType } from 'react';

type LazyImport = () => Promise<{ default: ComponentType<any> }>;

const retry = (fn: LazyImport, retriesLeft = 3, interval = 100):
    Promise<{ default: ComponentType<any> }> => new Promise((resolve, reject) => {
        fn()
            .then(resolve)
            .catch(err => {
                setTimeout(() => {
                    if (retriesLeft === 1) {
                        reject(new Error(`${err} after 3 retries`));
                        return;
                    }
                    retry(fn, interval, retriesLeft - 1).then(resolve, reject);
                }, interval);
            });
    });

export default retry;
