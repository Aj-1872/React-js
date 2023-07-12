import React, { Component } from 'react';
import _4child from './_4child';

export default class _4parent extends Component {
  handleButtonClick = () => {
    console.log('Button clicked in ParentComponent');
  };

  render() {
    return (
      <div>
        <ChildComponent onClick={this.handleButtonClick} />
      </div>
    );
  }
}
