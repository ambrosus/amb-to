import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

import './Asset.scss';

class Asset extends Component {
  constructor(props) {
    super(props);
    this.state = {
      asset: null
    }
  }

  render() {
    const asset = this.props.data;
    console.log(asset);

    return (
      <div className="Asset">
         {/* content goes here */}
      </div>
    )
  }
}

Asset.propTypes = {}

Asset.defaultProps = {}

export default Asset
