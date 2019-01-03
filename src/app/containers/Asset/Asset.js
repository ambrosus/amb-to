import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import Event from 'app/containers/Asset/Event';

import './Asset.scss';

class Asset extends Component {
  constructor(props) {
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
    const events = this.props.events;
    const style = this._getSyle();
    const eventDivs = events.map((e, index) => {
      return (
        <Event event={e} key={index} />
      )
    });

    return (
      <div className="Asset" style={style}>
        { eventDivs }
      </div>
    )
  }
}

Asset.propTypes = {}

Asset.defaultProps = {}

export default Asset
