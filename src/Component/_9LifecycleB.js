import React, { Component } from 'react'



 class _9LifecycleB extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           name : 'ajay'
        }
        console.log('LifecycleB constructor');
      }

   
      static getDerivedStateFromProps(props, state) {
        console.log('LifecycleB getDerivedStateFromProps');
        return null;
      }
      
      componentDidMount(){
        console.log('LifecycleB componentDidMount');

      }

      shouldComponentUpdate(){
        console.log('lifecycleB shouldComponentUpdate');
        return null;
      }

      getSnapshotBeforeUpdate(){
        console.log('lifecycleB getSnapshotBeforeUpdate ');
        return null;
      }

      componentDidUpdate(){
        console.log('lifecycleB componentDidUpdate');
      }
  render() {
    console.log('LifecycleB render');
    return (
      <div>Lifecycle B</div>
    )
  }
}

export default _9LifecycleB