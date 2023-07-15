import React, { Component } from 'react';
import _4child from './_4child';

export class _4parent extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      parentName: "parent"
    };
  }

  greetParent = async(name) => {

    await this.setState({
      parentName: name
    });

    const { parentName } = this.state;
   await alert(`Hello ${parentName} ${name}`);
  };

  render() {
    return (
      <div>
        <_4child greetHandler={(name) => { this.greetParent(name) }} />
      </div>
    );
  }
}

export default _4parent;
