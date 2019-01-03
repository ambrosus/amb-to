import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

import './style.scss';

class Event extends React.Component<any, any> {
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

  public render() {

    return (
      <div className="Event">
        <h2>Event page</h2>
      </div>
    )
  }
}

export default Event
