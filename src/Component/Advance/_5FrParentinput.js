import React, { Component } from 'react'
import _5FrInput from './_5FrInput'
export class _5FrParentinput extends Component {
    constructor(props) {
      super(props)
    
      this.inputRef = React.createRef()
    }

    clickHandler =()=>{
        this.inputRef.current.focus();
    }

  render() {
    return (
      <div>
       <_5FrInput ref={this.inputRef}/>
       <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    )
  }
}

export default _5FrParentinput