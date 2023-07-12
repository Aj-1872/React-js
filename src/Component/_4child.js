import React, { Component } from 'react';

export default class _4child extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onClick}>Click Me</button>
      </div>
    );
  }
}
