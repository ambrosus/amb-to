import React, {PropTypes, Component} from 'react/addons';
import shouldPureComponentUpdate from 'react-pure-render/function';

import './style.scss';

export default class Place extends Component {
  static propTypes = {
    text: PropTypes.string
  };

  static defaultProps = {};

  shouldComponentUpdate = shouldPureComponentUpdate;

  render() {
    return (
       <div className="place">
          {this.props.text}
       </div>
    );
  }
}