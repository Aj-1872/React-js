import React, { Component } from 'react'

export class _4RefsDemo extends Component {
    constructor(props) {
      super(props)
    
     this.inputRef = React.createRef();
    }

    componentDidMount(){


    }

    clickHandler =()=>{
        
        this.inputRef.current.focus()
        alert(this.inputRef.current.value)


    }

  render() {
    return (
      <div>
      <input type="text" ref={this.inputRef} />
      <button onClick={()=>{this.clickHandler()}}>Click</button>
      </div>
    )
  } 
}

export default _4RefsDemo