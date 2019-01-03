import React, { Component } from 'react';
import PropTypes from 'prop-types';
import API from '../../services/api';

import Preloader from 'app/components/Preloader/Preloader'

export default function (ComposedComponent) {
    class AssetRedirect extends Component {
        static contextTypes = {
            router: PropTypes.object
        }

        constructor(props) {
            super(props);
            this.state = {
                data: null
            };
        }

        componentWillMount() {
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

        componentWillReceiveProps(nextProps) {
            const oldAssetId = this.props.match.params.assetId;
            const newAssetId = nextProps.match.params.assetId;
            const assetIdExist = oldAssetId && newAssetId;

            if (assetIdExist && oldAssetId !== newAssetId) {
                this._getAssetAndRedirect(newAssetId);
            }
        }

        componentWillUnmount() {

        }

        async _getAssetAndRedirect(assetId) {
            let [asset, events] = await Promise.all([API.getAsset(assetId), API.getEvents(assetId)]);
            this.setState({
                asset: asset.data,
                events: events.data.results
            });
        }

        render() {
            if (this.state.asset && this.state.events) {
                return <ComposedComponent {...this.state} {...this.props} />
            } else {
                return <Preloader />
            }
        }
    }

    return AssetRedirect;
}