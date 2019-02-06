import React, { SFC } from 'react';
import './Home.scss';
import AssetSearch from './components/AssetSearch';
import SearchHistory from './components/SearchHistory';
import HomeHeader from './components/HomeHeader';
import { Footer } from '../../components';
import { scrollTop } from '../../utils';
import { observer, inject } from 'mobx-react';
import { AssetStore } from '../../store/asset.store';

const Home: SFC<{ AssetStore?: AssetStore }> = inject('AssetStore')(observer((props) => {
  scrollTop();
  props.AssetStore.resetStore();
  return (
    <div className='Home'>
      <HomeHeader />
      <AssetSearch />
      <SearchHistory />
      <Footer />
    </div>
  );
}));

export default Home;
