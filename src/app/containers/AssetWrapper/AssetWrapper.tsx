/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
 */
import React, {Component, lazy, Suspense} from 'react';
import {Route, RouteComponentProps, withRouter} from 'react-router';
import {inject, observer} from 'mobx-react';
import {AssetStore} from '../../store/asset.store';
import Header from '../../components/Header';
import {lazyLoad} from '../../utils';
import Footer from '../../components/Footer';
import Loader from "../../components/Loader";

const Asset: any = lazy(() => import('../Asset'));
const Event: any = lazy(() => import('../Event'));

interface AssetProps extends RouteComponentProps<{ assetId: string, eventId: string }> {
  AssetStore: AssetStore;
}

@inject('AssetStore')
@observer
class AssetWrapper extends Component<AssetProps> {

  public async componentDidMount() {
    const {history} = this.props;
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
    const {assetId} = this.props.match.params;
    const {brandings} = this.props.AssetStore;
    return (
      <>
        {
          brandings && assetId &&
          (<Suspense fallback={<Loader/>}>
            <Header assetId={assetId}/>
            <Route exact path='/:assetId' render={lazyLoad(Asset)}/>
            <Route exact path='/:assetId/events/:eventId' render={lazyLoad(Event)}/>
            <Footer/>
          </Suspense>)
        }
        {!brandings && (<Loader/>)}
      </>

    )
  }
}

export default withRouter(AssetWrapper);
