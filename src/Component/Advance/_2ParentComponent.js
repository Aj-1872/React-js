import React, { Component } from 'react'
import _2RegComponent from './_2RegComponent'
import _2PureComponent from './_2PureComponent'

export class _2ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'ajay'
      }
    }

    componentDidMount(){
        setInterval(()=>{

            this.setState({
                name: 'ajay'
            })

        },2000)
    }
  render() {
    console.log('parent com');
    return (
      <div>
      parent component
      <_2RegComponent name={this.state.name}></_2RegComponent>
      <_2PureComponent name={this.state.name} ></_2PureComponent>
      </div>
    )
  }
}

export default _2ParentComponent