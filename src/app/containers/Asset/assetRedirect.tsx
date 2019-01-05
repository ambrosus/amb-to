import React, { Component } from 'react';
import PropTypes from 'prop-types';
import API from '../../services/api';
import Preloader from '../../components/Preloader/Preloader'
import { parse } from 'path';

export default function (ComposedComponent: any) {
    class AssetRedirect extends Component<any, any> {
        static contextTypes = {
            router: PropTypes.object
        }

        constructor(props: any) {
            super(props);
            this.state = {
                data: null
            };
        }

        public componentWillMount() {
            const assetId = this.props.match.params.assetId;
            if (!assetId) {
                alert('no alert assetID');
                this.context.router.history.push('/');
            } else {
                this._getAssetAndRedirect(assetId);
            }
        }

        // componentWillUpdate(nextProps) {
        //     const oldAssetId = this.props.match.params.assetId;
        //     const newAssetId = nextProps.match.params.assetId;
        //     const assetIdExist = oldAssetId && newAssetId;

        //     if (assetIdExist && oldAssetId !== newAssetId) {
        //         this._getAssetAndRedirect(newAssetId);
        //     }
        // }

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
            let [asset, events] = await Promise.all([API.getAsset(assetId), API.getEvents(assetId)]);
            const parseEvents = await API.parseEvents(events.data);
            this.setState({
                asset: asset.data,
                assetDetails: parseEvents
            });
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