/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
 */
import React, { SFC } from 'react';
import './Home.scss';
import { scrollTop } from '../../utils';
import { observer, inject } from 'mobx-react';
import { AssetStore } from '../../store/asset.store';
import { HomeHeader, AssetSearch, SearchHistory } from './components';
import Footer from '../../components/Footer';

const Home: SFC<{ AssetStore?: AssetStore }> = inject('AssetStore')(observer((props) => {
  scrollTop();
  setTimeout(() => {
    props.AssetStore.resetStore();
  });
  return (
    <React.Fragment>
      <div className='Home'>
        <HomeHeader />
        <AssetSearch />
        <SearchHistory />
      </div>
      <Footer />
    </React.Fragment>
  );
}));

export default Home;
