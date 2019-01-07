import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import Event from './Event';
import Info from './Info';

import './Asset.scss';

class Asset extends Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  _getSyle() {
    try {
      return this.props.data.branding['content'] || {};
    } catch (error) {
      return {};
    }
  }

  _getImages() {
    try {
      return this.props.data.info.images;
    } catch (error) {
      return {};
    }
  }

  render() {
    const asset = this.props.asset;
    const assetDetails = this.props.assetDetails;
    const events = assetDetails.events;

    const style = this._getSyle();

    const eventDivs = events.map((e: any, index: any) => {
      return (
        <Event event={e} key={index} />
      )
    });

    return (
      <div className="Asset" style={style}>
      <Info asset={assetDetails} />
      </div>
    )
  }
}

// Asset.propTypes = {}

// Asset.defaultProps = {}

export default Asset