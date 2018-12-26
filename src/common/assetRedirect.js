import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import API from 'api.js';

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

        componentWillUpdate(nextProps) {
            const oldAssetId = this.props.match.params.assetId;
            const newAssetId = nextProps.match.params.assetId;
            const assetIdExist = oldAssetId && newAssetId;

            if (assetIdExist && oldAssetId !== newAssetId) {
                this._getAssetAndRedirect(newAssetId);
            }

            //   if (!nextProps.assetId) {
            //       this.context.router.history.push('/');
            //   }
        }

        componentWillReceiveProps(nextProps) {
            const oldAssetId = this.props.match.params.assetId;
            const newAssetId = nextProps.match.params.assetId;
            const assetIdExist = oldAssetId && newAssetId;

            if (assetIdExist && oldAssetId !== newAssetId) {
                this._getAssetAndRedirect(newAssetId);
            }
        }

        _getAssetAndRedirect(assetId) {
            API.getAsset(assetId)
                .then((res) => {
                    this.setState({
                        data: res.data
                    });
                });
        }


        render() {
            return <ComposedComponent {...this.state} {...this.props} />
        }
    }

    return AssetRedirect;
}