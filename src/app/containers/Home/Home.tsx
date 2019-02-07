import React, { SFC } from 'react';
import './Home.scss';
import { scrollTop } from '../../utils';
import { observer, inject } from 'mobx-react';
import { AssetStore } from '../../store/asset.store';
import { HomeHeader, AssetSearch, SearchHistory } from './components';
import { Footer } from '../../components';

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
