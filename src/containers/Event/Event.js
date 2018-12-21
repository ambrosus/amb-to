import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

import './Event.scss';

class Event extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Event">
         {/* content goes here */}
      </div>
    )
  }
}

Event.propTypes = {}

Event.defaultProps = {}

export default Event
