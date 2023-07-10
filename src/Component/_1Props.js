import React, { Component } from 'react'

export class _1Props extends Component {
  render() {

    const {name , supName , children } = this.props;

    return (
      <div>
      <h1>Hello {name} aka {supName} </h1>
      
      {children}//this line is to call the child
      </div>
    )
  }
}

export default _1Props