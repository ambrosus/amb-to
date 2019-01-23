import React, { Component } from 'react';
import './AssetSearch.scss';
import { AssetService } from '../../../../services';
import { History } from 'history';
import Spinner from '../../../../components/Spinner';

interface AssetProps {
  history: History;
}

interface AssetStates {
  spinner: boolean;
  searchValue: string;
  errorStatus: 0 | 1 | 2;
}

export default class AssetSearch extends Component<AssetProps, AssetStates> {
  public assetService: AssetService = new AssetService();

  constructor(props: AssetProps) {
    super(props);
    this.state = {
      spinner: false,
      searchValue: '',
      errorStatus: 0,
    };
  }

  public showError = () => {
    const { errorStatus } = this.state;
    switch (errorStatus) {
      case 1:
        return <p>No asset with that assetId.</p>;
      case 2:
        return <p>Please enter something first.</p>;
      default:
        return null;
    }
  }

  public searchAsset = () => {
    this.setState({ errorStatus: 0 });
    const { searchValue } = this.state;
    if (!searchValue || /^\s*$/.test(searchValue)) {
      this.setState({ errorStatus: 2 });
    } else {
      this.setState({ spinner: true });
      this.getAssetAndRedirect(searchValue);
    }
  }

  public async getAssetAndRedirect(assetId: any) {
    const { history } = this.props;
    try {
      const events = await this.assetService.getEvents(assetId);
      const asset = await this.assetService.parseEvents(events.data);
      if (events.data.resultCount && asset.events.length) {
        history.push(`/${assetId}`, { asset });
        return;
      }
      this.setState({ errorStatus: 1, spinner: false });
    } catch (error) {
      this.setState({ errorStatus: 1, spinner: false });
    }
  }

  public handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    this.setState({ searchValue: value });
  }

  public render() {
    const { spinner, searchValue } = this.state;
    return (
      <div className='AssetSearch'>
        <div className='wrapper'>
          <div className='page'>
            <h3 className='title'>Search for an asset</h3>
            <div className='form-search'>
              <input onChange={this.handleChange} value={searchValue} type='text' placeholder='Asset ID' />
              <button onClick={this.searchAsset} className='btn'>Search</button>
            </div>
            {spinner && <Spinner />}
            <div className='errors'>
              {this.showError()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
