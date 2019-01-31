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
  error: string | null;
}

export default class AssetSearch extends Component<AssetProps, AssetStates> {

  constructor(props: AssetProps) {
    super(props);
    this.state = {
      spinner: false,
      searchValue: '',
      error: null,
    };
  }

  public searchAsset = () => {
    this.setState({ error: null });
    const { searchValue } = this.state;
    if (!searchValue || /^\s*$/.test(searchValue)) {
      this.setState({ error: 'AssetId is required.' });
    } else {
      this.setState({ spinner: true });
      this.getAssetAndRedirect(searchValue);
    }
  }

  public async getAssetAndRedirect(assetId: any) {
    const { history } = this.props;
    try {
      const events = await AssetService.getEvents(assetId);
      const asset = await AssetService.parseEvents(events.data);
      if (events.data.resultCount && asset.events.length) {
        history.push(`/${assetId}`);
        return;
      }
      this.setState({ error: 'No asset with that assetId.', spinner: false });
    } catch (error) {
      this.setState({ error: 'No asset with that assetId.', spinner: false });
    }
  }

  public handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    this.setState({ searchValue: value });
  }

  public render() {
    const { spinner, searchValue, error } = this.state;
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
              {error && (<p>{error}</p>)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
