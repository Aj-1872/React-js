import React, { Component } from 'react'

export class _4Input extends Component {
    constructor(props) {
      super(props)
    
      this.inputRef = React.createRef()
    }

    focusInput=()=>{
        this.inputRef.current.focus()

    }
  render() {
    return (
      <div>
      <input type="text" ref={this.inputRef }/>
   
      </div>
    )
  }
}

export default _4Input