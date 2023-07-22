import React, { Component } from 'react'
import _7higherCounter from './_7higherCounter'
import UpdatedComponent from './_7withCounter'

export class _7higherOrderComponent extends Component {

    // constructor(props) {
    //   super(props)
    
    //   this.state = {
    //      count : 0,

    //      secondCount : 1,

    //      thirdcount : 2

    //   }
    // }

    // increamentCount =()=>{

    //     // this.setState(prevState=>{
    //     //     return{ count : prevState.count + 1 }
    //     // }) 

    //     this.setState(prevState=>({
    //         count : prevState.count + 1,
    //         secondCount : prevState.secondCount + 1,
    //     }))

    //     // this.setState({
    //     //     count : this.state.count + 1
    //     // })

    // }

    // increamentCountMouse =()=>{
    //     this.setState(prevState=>({
    //         thirdcount : prevState.thirdcount + 1
    //     }))
    // }

  render() {

    // const {count,secondCount} = this.state  

    const {count,increamentCount ,secondCount} = this.props

    return (


        <div>
        <button onClick={()=>{increamentCount()}} > {this.props.name}  Clicked {count} {secondCount} times</button>
        <_7higherCounter/>
        </div>
        // <button onClick={()=>{this.increamentCount()}} onMouseMove={()=>{this.increamentCountMouse()}}> {this.props.name} Clicked {count} {secondCount} times</button>
        //  \*{<_7higherCounter thirdcount ={this.state.thirdcount}/>}*\
    )
  }
}

export default UpdatedComponent(_7higherOrderComponent)