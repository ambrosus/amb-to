import React, { Component } from 'react';
import './AssetSearch.scss';
import Spinner from '../../../../components/Spinner';
import { inject, observer } from 'mobx-react';
import { AssetStore } from '../../../../store/asset.store';
import { RouteComponentProps, withRouter } from 'react-router';
import { Input, Button } from '@ambrosus/react';

interface AssetProps extends RouteComponentProps {
  AssetStore?: AssetStore;
}

interface AssetStates {
  spinner: boolean;
  searchValue: string;
  error: string | null;
}
@inject('AssetStore')
@observer
class AssetSearch extends Component<AssetProps, AssetStates> {

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
      await this.props.AssetStore!.setAsset(assetId);
      if (this.props.AssetStore!.asset) {
        setTimeout(() => {
          history.push(`/${assetId}`);
        });
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

  public onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>): void => {
    if (event.key === 'Enter') {
      event.preventDefault();
      event.stopPropagation();
      this.searchAsset();
    }
  }

  public render() {
    const { spinner, searchValue, error } = this.state;
    return (
      <div className='AssetSearch'>
        <div className='wrapper'>
          <div className='page'>
            <h3 className='title'>Search for an asset</h3>
            <div className='form-search'>
              <Input className='search-input' onKeyDown={this.onKeyDown} changed={this.handleChange} value={searchValue} placeholder='Asset ID' />
              <Button className='search-button' onClick={this.searchAsset}>Search</Button>
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

export default withRouter(AssetSearch);
