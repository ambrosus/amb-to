import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

import './Asset.scss';

class Asset extends Component {
  constructor(props) {
    super(props);
  }

  render() {
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
