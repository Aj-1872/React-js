import React, { Component } from 'react'

export class _6error extends Component {
  
  render() {
    const {heroName} = this.props
    if (heroName === 'joker'){
        throw new Error('not a hero') 
    }
    
    return (
      <div>
      {heroName}
      </div>
    )
  }
}

export default _6error