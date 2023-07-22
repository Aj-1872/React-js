import React, { Component } from 'react';

export class _6errorBoundry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error,info){

    console.log(error);
    console.log(info);


  }

  render() {
    const { hasError } = this.state;

    // Place the condition block outside the JSX
    if (hasError) {
      return <h1>something is wrong</h1>;
    }

    // Correct the prop 'Children' to 'children'
    return <div>{this.props.children}</div>;
  }
}

export default _6errorBoundry;
