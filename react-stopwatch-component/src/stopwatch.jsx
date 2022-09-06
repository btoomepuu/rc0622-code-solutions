import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

export default class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: 'stop'
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.toggle === 'stop') {
      this.setState({ toggle: 'start' });
    } else {
      this.setState({ toggle: 'stop' });
    }
  }

  render() {
    return (
      <div className="stopwatch-container" onClick={this.handleClick}>
        <div className="stopwatch">
        </div>
        <div >
          <FontAwesomeIcon icon={faPlay} />
          <FontAwesomeIcon icon={faPause} />
        </div>
      </div>);
  }
}
