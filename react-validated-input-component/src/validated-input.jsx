import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faCheck } from '@fortawesome/free-solid-svg-icons';

export default class ValidateInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: ''
    };
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handlePasswordChange(event) {
    const value = event.target.value;
    this.setState({ password: value });
  }

  render() {
    const password = this.state.password;
    let checkOrX = <FontAwesomeIcon icon={faCheck} />;
    let messageColor;
    let message = '';

    if (password.length === 0) {
      message = 'A password is required';
      checkOrX = <FontAwesomeIcon icon={faXmark} />;
      messageColor = 'red';
    } else if (password.length < 8) {
      message = 'Your password it too short.';
      checkOrX = <FontAwesomeIcon icon={faXmark} />;
      messageColor = 'red';
    } else {
      checkOrX = <FontAwesomeIcon icon={faCheck} />;
      messageColor = 'green';
    }

    return (
      <form>
        <label>
          <h3>Password</h3>
          <div>
            <input type="password" value={this.state.value} onChange={this.handlePasswordChange} />
            <span className={`message ${messageColor}`}> {checkOrX}</span>
          </div>
        </label>
        <div className={`message ${messageColor}`}>{message}
        </div>
      </form>
    );
  }
}
