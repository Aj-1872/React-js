import React, { Component } from 'react'

export class _2State extends Component {

    constructor (){
        super()

        this.state ={
            message : "Wellcome visitore"
        } 

        
    }

     changeMsg=()=>{

        this.setState ({
            message : "Subscribed"
        });
    }
    

  render() {

    const {message} = this.state;

    return (
      <div> 
      <h1>
      {message}
      <br/>
      <button onClick={this.changeMsg}>Subscribe</button>
      </h1>
       </div>
    )
  }
}

export default _2State