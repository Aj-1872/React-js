import React, { Component } from 'react'

export class _2RegComponent extends Component {
  render() {
    console.log('reg com');

    return (
      <div>
        regular component {this.props.name}
      </div>
    )
  }
}
export default _2RegComponent