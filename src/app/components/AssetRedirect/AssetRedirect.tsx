import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AssetService } from '../../services';
import Preloader from '../Preloader/Preloader';

export default function (ComposedComponent: any) {
  class AssetRedirect extends Component<any, any> {
    public ambrosus: AssetService = new AssetService();

    public static contextTypes = {
      router: PropTypes.object,
    };

    constructor(props: any) {
      super(props);
      this.state = {};
    }

    public componentWillMount() {
      const asset = this.props.location.state && this.props.location.state.asset ? this.props.location.state.asset : null;
      const assetId = this.props.match.params.assetId;

      if (asset) {
        this.setState({ asset, assetId });
      } else if (!assetId) {
        this.context.router.history.push('/');
        return;
      }
      this.getAssetAndRedirect(assetId);
    }

    public componentWillReceiveProps(nextProps: any) {
      const oldAssetId = this.props.match.params.assetId;
      const newAssetId = nextProps.match.params.assetId;
      const assetIdExist = oldAssetId && newAssetId;

      if (assetIdExist && oldAssetId !== newAssetId) {
        this.getAssetAndRedirect(newAssetId);
      }
    }

    public async getAssetAndRedirect(assetId: any) {
      try {
        const events = await this.ambrosus.getEvents(assetId);
        const asset = await this.ambrosus.parseEvents(events.data);
        this.setState({ assetId, asset });
      } catch (error) {
        this.context.router.history.push('/');
        return;
      }
    }

    public render() {
      if (this.state.assetId && this.state.asset) {
        return <ComposedComponent {...this.state} {...this.props} />;
      }

      return <Preloader />;
    }
  }
  return AssetRedirect;
}
