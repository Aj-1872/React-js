import React, { Component } from 'react'
import UpdatedComponent from './_7withCounter'


export class _7higherCounter extends Component {
  render() {
    // const{thirdcount} = this.props
    const{count,increamentCount} = this.props
    return (

      <div>
      <h2  onMouseOver={()=>{increamentCount( )}}>
        Hovered {count} times
      </h2>
      </div>
      //  <h2> {this.props.name}  Hovered {count} times</h2>
    )
  }
}

export default UpdatedComponent(_7higherCounter)