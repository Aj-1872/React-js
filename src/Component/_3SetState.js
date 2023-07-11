import React, { Component } from 'react'



export class _3SetState extends Component {

    constructor (){
        super()

        this.state={
            count : 0,
            backgroundColor : "white" 
        };
    }

    increamentCount =()=>{
        this.setState((prevState , )=>({

            count : prevState.count + 1 ,
            backgroundColor: prevState.backgroundColor === "white" ? "black" : "white"

            
        }))
    }

    dcreamentCount =()=>{
        this.setState((prevState)=>({

            count : prevState.count - 1,
            backgroundColor: prevState.backgroundColor === "white" ? "black" : "white"

            
        }))
    }

    

  render() {

    const {backgroundColor,count} = this.state;
    return (
      <div>
      
<h1 style={{backgroundColor : backgroundColor }}>Count : {count}</h1>
<br/>
<button onClick={()=>{this.increamentCount()}}>increament</button>
<button onClick={()=>{this.dcreamentCount()}}>dcreament</button>

      </div>
    )
  }
}

export default _3SetState