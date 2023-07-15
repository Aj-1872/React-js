import React, { Component } from 'react'
import './_7myStyle.css'

export class _7StyleSheet extends Component {
  render() {

    const {primary} = this.props; 

    let className = primary ? 'primary' : '';

    return (
      <div className={`${className} font-xl`}>Stylesheet</div>
    )
  }
}

export default _7StyleSheet