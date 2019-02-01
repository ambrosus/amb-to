import React from 'react';
import './Home.scss';
import AssetSearch from './components/AssetSearch';
import SearchHistory from './components/SearchHistory';
import HomeHeader from './components/HomeHeader';
import { Footer } from '../../components';

const Home = () => {
  return (
    <div className='Home'>
      <HomeHeader />
      <AssetSearch />
      <SearchHistory />
      <Footer />
    </div>
  );
};

export default Home;
