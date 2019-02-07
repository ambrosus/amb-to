import React, { Component } from 'react';
import { withRouter, RouteComponentProps, Route } from 'react-router';
import { inject, observer } from 'mobx-react';
import { lazyLoad } from '../../utils';
import { AssetStore } from '../../store/asset.store';
import { Header } from '../../components';

const Asset: any = lazyLoad(() => import('../Asset'));
const Event: any = lazyLoad(() => import('../Event'));

interface AssetProps extends RouteComponentProps<{ assetId: string, eventId: string }> {
  AssetStore: AssetStore;
}

@inject('AssetStore')
@observer
class AssetWrapper extends Component<AssetProps> {

  public async componentDidMount() {
    const { history } = this.props;
    try {
      if (!this.props.AssetStore.asset) {
        await this.props.AssetStore.setAsset(this.props.match.params.assetId);
        if (!this.props.AssetStore.asset) {
          history.push('/');
        }
      }
    } catch (error) {
      history.push('/');
    }
  }

  public render() {
    const { assetId } = this.props.match.params;
    return (
      <React.Fragment>
        <Header assetId={assetId} />
        <Route exact path='/:assetId/events/:eventId' component={Event} />
        <Route exact path='/:assetId' component={Asset} />
      </React.Fragment>
    );
  }
}

export default withRouter(AssetWrapper);
