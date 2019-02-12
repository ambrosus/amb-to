import React, { Component, lazy } from 'react';
import { withRouter, RouteComponentProps, Route } from 'react-router';
import { inject, observer } from 'mobx-react';
import { AssetStore } from '../../store/asset.store';
import Header from '../../components/Header';
import { lazyLoad } from '../../utils';
import Footer from '../../components/Footer';

const Asset: any = lazy(() => import('../Asset'));
const Event: any = lazy(() => import('../Event'));

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
    const { brandings } = this.props.AssetStore;
    if (brandings) {
      return (
        <React.Fragment>
          <Header assetId={assetId} />
          <Route exact path='/:assetId/events/:eventId' render={lazyLoad(Event)} />
          <Route exact path='/:assetId' render={lazyLoad(Asset)} />
          <Footer />
        </React.Fragment>
      );
    }
    return <div />;
  }
}

export default withRouter(AssetWrapper);
