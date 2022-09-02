import React from 'react';
import ReactDOM from 'react-dom/client';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickCount: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const value = this.state.clickCount;
    this.setState({ clickCount: value + 1 });
  }

  render() {
    let className = '';
    const clickCount = this.state.clickCount;
    if (clickCount >= 18) {
      className = 'white';
    } else if (clickCount >= 15) {
      className = 'yellow';
    } else if (clickCount >= 12) {
      className = 'orange';
    } else if (clickCount >= 9) {
      className = 'pink';
    } else if (clickCount >= 6) {
      className = 'lt-prpl';
    } else if (clickCount >= 3) {
      className = 'drk-prpl';
    }
    return <button className={`btn ${className}`} onClick={this.handleClick}> Hot Button</button>;
  }
}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

const element = <HotButton />;
root.render(element);
