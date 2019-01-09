import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ReactSVG from 'react-svg';
import Asset from '../Asset';
import {AssetService, StorageService} from '../../services';
import { Header, AssetRedirect } from '../../components';

import './Home.scss';

import amblogo from 'assets/images/amb-logo.png';
import spinnerLogo from 'assets/icons/spinner.svg';

class Search extends Component<any, any> {
  public ambrosus: AssetService;
  public storage: StorageService;

  constructor(props: any) {
    super(props);
    this.ambrosus = new AssetService();
    this.storage = new StorageService();
    this.state = {
      search: '',
      errorNoAsset: false,
      errorSearchEmpty: false,
      spinner: false,
      history: [],
    };
  }

  public componentDidMount() {
    this.loadHistory();
  }

  public loadHistory() {
    const history = this.storage.get('history)');
    this.setState({
      history: history ? history : [],
    });
  }

  public clearHistory() {
    this.storage.clear();
    this.setState({
      history: [],
    });
  }

  public onSearch() {
    const search = this.state.search;
    if (!search || /^\s*$/.test(search)) {
      this.setState({
        errorSearchEmpty: true,
      });
    } else {
      this.setState({
        errorSearchEmpty: false,
        spinner: true,
      });

      this.getAssetAndRedirect(search);
    }
  }

  public async getAssetAndRedirect(assetId: any) {
    try {
      const asset = await this.ambrosus.getAsset(assetId);
      if (asset) {
        this.props.history.push(`/${assetId}`);
      } else {
        this.setState({
          errorNoAsset: true,
          spinner: false,
        });
      }
    } catch (error) {
      this.setState({
        errorNoAsset: true,
        spinner: true,
      });
    }
  }

  public updateInputValue(e: any) {
    this.state = {
      search: e.target.value,
    };
  }

  public render() {
    const history = this.state.history;
    const spinner = this.state.spinner;
    const errorNoAsset = this.state.errorNoAsset;
    const errorSearchEmpty = this.state.errorSearchEmpty;

    const historyDivs = history.map((item: any) => {
      return (
        <Link className='history__item' to={`/${item.id}`}>
          <div>{item.title}</div>
          <div className='history__item__div'>
            <small className='history__item__small'>{item.id}</small>
          </div>
        </Link>
      );
    });

    return (
      <div>
        <Header />
        <div className='Search'>
          <div className='wrapper'>
            <div className='page'>
              <h3 className='title'>Search for an asset</h3>
              <div className='form-search'>
                <input type='text' placeholder='assetId' onChange={(e) => this.updateInputValue(e)} />
                <button className='btn' onClick={() => this.onSearch()}>Search</button>
              </div>
              {spinner && <ReactSVG className='spinner' src={spinnerLogo} /> }

              <div className='errors'>
                {errorNoAsset && <p>No asset with that assetId.</p>}
                {errorSearchEmpty && <p>Please enter something first.</p>}
              </div>
            </div>

            {history ?
              <div>
                <div className='page history_page'>
                  <h3 className='title'>Previously viewed</h3>
                  <div className='history'>
                    {historyDivs}
                  </div>
                  <div className='clear__history'>
                    <button className='btn' onClick={this.clearHistory.bind(this)}>Clear Search History</button>
                  </div>
                </div>
              </div> : ''
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
