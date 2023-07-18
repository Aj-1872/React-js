import React, { Component } from 'react'
import _4Input from './_4Input'

export class _4FocusINput extends Component {

    constructor(props) {
      super(props)
    
      this.comRef= React.createRef();
    }

    clickHandler =()=>{
        this.comRef.current.focusInput();
    }

  render() {
    return (
      <div>
      <_4Input ref={this.comRef}/>
      <button onClick={()=>{this.clickHandler()}}>FocusInput</button>
      </div>
    )
  }
}

export default _4FocusINput