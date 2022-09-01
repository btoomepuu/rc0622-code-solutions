import React from 'react';
import ReactDOM from 'react-dom/client';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { isClicked: false };
  }

  handleClick() {
    this.setState({ isClicked: true });
    this.props.text = 'Thank you!';
  }

  render() {
    return <button onClick={this.handleClick}>{this.props.text}</button>;
  }
}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

const element = <CustomButton text="Click Me!" />;
root.render(element);
