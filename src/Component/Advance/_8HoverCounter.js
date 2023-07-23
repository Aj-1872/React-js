import React, { Component } from 'react'

export class _8HoverCounter extends Component {

  render() {

    const {count,increment} = this.props

    return (
      <div>
        <h2 onMouseOver={()=>{increment()}}>Hovered {count} times</h2>
      </div>
    )
  }
}

export default _8HoverCounter