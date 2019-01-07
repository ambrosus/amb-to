import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import ReactSVG from 'react-svg'
import API from '../../services/api';
import Asset from '../Asset';
import AssetRedirect from '../Asset/assetRedirect';



import './styles.scss';

import amblogo from 'assets/images/amb-logo.png';
import spinnerLogo from 'assets/svg/spinner.svg';


class Search extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      search: "",
      errorNoAsset: false,
      errorSearchEmpty: false,
      spinner: false,
      history: []
    };
  }

  public componentDidMount() {
    this.loadHistory();
  }

  loadHistory() {
    let history = localStorage.getItem("history)");
    this.setState({
      history: history ? JSON.parse(history) : []
    });
  }

  clearHistory() {
    localStorage.clear();
    this.setState({
      history : []
    });
  }

  onSearch() {
    const search = this.state.search;
    if (!search || /^\s*$/.test(search)) {
      this.setState({
        errorSearchEmpty: true
      });
    } else {
      this.setState({
        errorSearchEmpty: false,
        spinner: true
      });

      this._getAssetAndRedirect(search);
    }
  }

  async _getAssetAndRedirect(assetId: any) {
    try {
      let asset = await API.getAsset(assetId);
      if(asset) {
        this.props.history.push('/' + assetId);
        console.log('navigating');
      } else {
        console.log('no asset');
        this.setState({
          errorNoAsset: true,
          spinner: false
        });
      }
    } catch (error) {
      console.log(error);
      this.setState({
        errorNoAsset: true,
        spinner: true
      });
    }
}

  updateInputValue(e: any) {
    this.state = {
      search: e.target.value
    };
  }

  public render() {
    const history = this.state.history;
    const spinner = this.state.spinner;
    const errorNoAsset = this.state.errorNoAsset;
    const errorSearchEmpty = this.state.errorSearchEmpty;

    const historyDivs = history.map((item:any) => {
      return (
        <Link className="history__item" to={`/${item.id}`}>
          <div>{ item.title}</div>
          <div className="history__item__div">
            <small className="history__item__small">{ item.id }</small>
          </div>
        </Link>
      );
    });

    return (
      <div className="Search">
          <div className="wrapper">
            {/* <div className="logo">
              <img className="logo__image" src={amblogo} />
            </div> */}
            <div className="page">
              <h3 className="title">Search for an asset</h3>
              <div className="form-search">
                <input type="text" placeholder="assetId" onChange={(e) => this.updateInputValue(e)}/>
                <button className="btn" onClick={() => this.onSearch()}>Search</button>
              </div>
              {spinner ?
                <ReactSVG className="spinner" src={spinnerLogo} />: ''
              }

              <div className="errors">
              {errorNoAsset ?
                <p>No asset with that assetId.</p> : ''
              }

              {errorSearchEmpty ?
                <p>Please enter something first.</p> : ''
              }
              </div>
            </div>

            { history ?
            <div>
              <div className="page history_page">
                <h3 className="title">Previously viewed</h3>
                <div className="history">
                {historyDivs}
                </div>
                <div className="clear__history">
                  <button className="btn" onClick={this.clearHistory.bind(this)}>Clear Search History</button>
                </div>
              </div>
            </div> : ''
            }
          </div>
      </div>
    )
  }
}

export default Search
