import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

export default class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      mode: 'stop'
    };
    this.handleClick = this.handleClick.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }

  handleClick() {
    if (this.state.mode === 'stop') {
      this.setState({ mode: 'start' });
      this.startTimer();
    } else {
      this.setState({ mode: 'stop' });
      this.stopTimer();
    }
  }

  startTimer() {
    let time = this.state.time;

    this.timer = setInterval(() => {
      this.setState({
        time: time++
      });
    }

    , 1000);
  }

  stopTimer() {
    clearInterval(this.timer);
  }

  resetTimer() {
    if (this.state.time > 0 && this.state.mode === 'stop') {
      this.setState({
        time: 0,
        mode: 'stop'
      });
    }
  }

  render() {
    const playPauseMode = this.state.mode;
    let button;

    if (playPauseMode === 'start') {
      button = <FontAwesomeIcon icon={faPause} />;
    } else {
      button = <FontAwesomeIcon icon={faPlay} />;
    }

    return (
      <div className="stopwatch-container">
        <div className="stopwatch" onClick={this.resetTimer}>
        <h1 className='counter'>{this.state.time}</h1>
        </div>
        <div className='btn-container'>
          <button onClick={this.handleClick}>
          {button}
          </button>
        </div>
      </div>);
  }
}
