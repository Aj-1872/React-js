import React, { Component } from 'react'
import _9LifecycleB from './_9LifecycleB';


 class _9Lifecycle extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           name : 'ajay'
        }
        console.log('LifecycleA constructor');
      }

   
      static getDerivedStateFromProps(props, state) {
        console.log('LifecycleA getDerivedStateFromProps');
        return null;
      }
      
      componentDidMount(){
        console.log('LifecycleA componentDidMount');

      }
  render() {
    console.log('LifecycleA render');
    return (
      <div>Lifecycle A
      <div>
      <_9LifecycleB/>
      </div>
      </div>
    )
  }
}

export default _9Lifecycle