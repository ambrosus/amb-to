import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

import './styles.scss';

import amblogo from 'assets/images/amb-logo.png';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      errorNoAsset: false,
      errorSearchEmpty: false,
      spinner: false,
      history: []
    };
  }

  componentDidMount() {
    this.loadHistory();
  }

  loadHistory() {
    let history = localStorage.getItem("history)");
    this.state = {
      history: history ? JSON.parse(history) : []
    };
  }

  clearHistory() {
    localStorage.clear();
    this.state = {
      history : []
    };
  }

  onSearch() {
    const search = this.state.search;
    if (!search || /^\s*$/.test(search)) {
      this.setState = {
        errorSearchEmpty: true
      };
    } else {
      this.state = {
        errorSearchEmpty: false,
        spinner: true
      };

      // this.assetService.getAsset(search).subscribe(
      //   resp => {
      //     this.router.navigate([search]);
      //   },
      //   err => {
      //     console.log('err ', err);
      //     this.spinner = false;
      //     this.errorNoAsset = true;
      //     setTimeout(() => {
      //       this.errorNoAsset = false;
      //     }, 3000);
      //   }
      // );
    }

  }

  updateInputValue(e) {
    this.state = {
      search: e.target.value
    };
  }

  render() {
    const history = this.state.history;
    const spinner = this.state.spinner;
    const errorNoAsset = this.state.errorNoAsset;
    const errorSearchEmpty = this.state.errorSearchEmpty;

    const historyDivs = history.map((item) => {
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
                <input type="text" placeholder="assetId" onChange={this.updateInputValue.bind(this)}/>
                <button className="btn" onClick={this.onSearch.bind(this)}>Search</button>
              </div>
              {spinner ?
              `<app-spinner *ngIf="spinner"></app-spinner>` : ''
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

Search.propTypes = {}

Search.defaultProps = {}

export default Search
