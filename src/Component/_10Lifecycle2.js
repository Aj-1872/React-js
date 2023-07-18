import React, { Component } from 'react'
import _9LifecycleB from './_9LifecycleB';


 class _10Lifecycle2 extends Component {
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

      shouldComponentUpdate(){
        console.log('lifecycleA shouldComponentUpdate');
        return null;

      }

      getSnapshotBeforeUpdate(){
        console.log('lifecycleA getSnapshotBeforeUpdate ');
        return null;
      }

      componentDidUpdate(){
        console.log('lifecycleA componentDidUpdate');
      }

      changeState =()=>{
        this.setState({
          name : 'codeevalution'
        })
      }
  render() {
    console.log('LifecycleA render');
    return (
      <div>Lifecycle A
      <div>
      <button onClick={this.changeState}>Change state</button>
      <_9LifecycleB/>
      </div>
      </div>
    )
  }
}

export default _10Lifecycle2