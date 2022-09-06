import React from 'react';

export default class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: 'off'
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.toggle === 'off') {
      this.setState({ toggle: 'on' });
    } else {
      this.setState({ toggle: 'off' });
    }
  }

  render() {
    const toggleStatus = this.state.toggle;
    let toggleContainer = '';
    let toggle = '';
    let text = '';
    if (toggleStatus === 'off') {
      toggleContainer = 'toggle-container';
      toggle = 'toggle-switch';
      text = 'OFF';
    } else {
      toggleContainer = 'toggle-container-on';
      toggle = 'toggle-switch-on';
      text = 'ON';
    }
    return (
      <div className={`${toggleContainer}`} onClick={this.handleClick}>
        <span className={`${toggle}`} ></span>
        <span className='text'>{text}</span>
      </div>);
  }
}
