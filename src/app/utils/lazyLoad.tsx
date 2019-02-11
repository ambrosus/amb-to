import React, { Suspense } from 'react';

import { Loader } from '../components';

const lazyLoad = (Component: any) => {
  return (props: any) => <Suspense fallback={<Loader />}><Component {...props} /></Suspense>;
};

export default lazyLoad;
