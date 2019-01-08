import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AssetService from '../../services/asset.service';
import Preloader from '../../components/Preloader/Preloader'


export default function (ComposedComponent: any) {
    class AssetRedirect extends Component<any, any> {
        ambrosus: AssetService;

        static contextTypes = {
            router: PropTypes.object
        }

        constructor(props: any) {
            super(props);
            this.ambrosus = new AssetService();
            this.state = {
                data: null
            };
        }

        public componentWillMount() {
            if(this.props.asset && this.props.assetDetails) {
                this.setState({
                    asset: this.props.asset,
                    assetDetails: this.props.assetDetails
                });
            } else {
                const assetId = this.props.match.params.assetId;
                if (!assetId) {
                    this.context.router.history.push('/');
                } else {
                    this._getAssetAndRedirect(assetId);
                }
            }
        }

        public componentWillReceiveProps(nextProps: any) {
            const oldAssetId = this.props.match.params.assetId;
            const newAssetId = nextProps.match.params.assetId;
            const assetIdExist = oldAssetId && newAssetId;

            if (assetIdExist && oldAssetId !== newAssetId) {
                this._getAssetAndRedirect(newAssetId);
            }
        }

        public componentWillUnmount() {

        }

        async _getAssetAndRedirect(assetId: any) {
            try {
                let [asset, events] = await Promise.all([this.ambrosus.getAsset(assetId), this.ambrosus.getEvents(assetId)]);
                const parseEvents = await this.ambrosus.parseEvents(events.data);
                
                this.setState({
                    asset: asset.data,
                    assetDetails: parseEvents
                });
            } catch (error) {
                console.log(error);
            }
        }

        public render() {
            if (this.state.asset && this.state.assetDetails) {
                return <ComposedComponent {...this.state} {...this.props} />
            } else {
                return <Preloader />
            }
        }
    }

    return AssetRedirect;
}