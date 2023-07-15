import React, { Component } from 'react'

export class _4child extends Component {
  render() {

    var name = "ajay";
    return (
      <div>
      <button onClick={()=>{this.props.greetHandler(name)}}>GreetParent</button>
      </div>
    )
  }
}

export default _4child