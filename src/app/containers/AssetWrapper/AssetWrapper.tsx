/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
 */
import React, {Component, lazy} from 'react';
import {Route, RouteComponentProps, withRouter} from 'react-router';
import {inject, observer} from 'mobx-react';
import {AssetStore} from '../../store/asset.store';
import Header from '../../components/Header';
import {lazyLoad} from '../../utils';
import Footer from '../../components/Footer';
import Loader from '../../components/Loader';

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
          (
            <>
              {assetId === '0x65f4a8bf0a6b964b9bc32d3a926b3e5edbc218c29bf71fed8fb246fc6ebba449' ||
              '0x649ba9ddc96e34321131d1a829b654eabf634bbfab2eb7532ff219e3a96751ed' ||
              '0x4efe2723f33387eede1b03cda4b410417cd3c15e88e8125047271489597711e5'
                ? null
                : <Header assetId={assetId}/>
              }

              <Route exact path='/:assetId' render={lazyLoad(Asset)}/>
              <Route exact path='/:assetId/events/:eventId' render={lazyLoad(Event)}/>
              <Footer/>
            </>
          )
        }
        {!brandings && (<Loader/>)}
      </>

    );
  }
}

export default withRouter(AssetWrapper);
