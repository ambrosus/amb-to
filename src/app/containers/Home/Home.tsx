import React from 'react';
import { History } from 'history';

import './Home.scss';
import AssetSearch from './components/AssetSearch';
import SearchHistory from './components/SearchHistory';
import HomeHeader from './components/HomeHeader';
import { Footer } from '../../components';

interface HomeProps {
  history: History;
}

export default class Search extends React.Component<HomeProps, any> {
  public render() {
    const { history } = this.props;
    return (
      <div className='Home'>
        <HomeHeader />
        <AssetSearch history={history} />
        <SearchHistory />
        <Footer />
      </div>
    );
  }
}
