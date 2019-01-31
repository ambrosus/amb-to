import Loadable from 'react-loadable';
import React from 'react';

const loading = () => {
  return <p>Loading</p>;
};

const lazyLoad = (func: any) =>
  Loadable({
    loading,
    loader: func,
  });

export default lazyLoad;
