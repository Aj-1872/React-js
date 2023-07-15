import React, { Component } from 'react'

export class _5Condition extends Component {
    constructor(props) {
        super(props)

        this.state = {

            isLoggedIn: false,
        }
    }
    render() {

        const { isLoggedIn } = this.state;

       return isLoggedIn && <div>wlcome ajay</div>

        // return(
        //     isLoggedIn ? <div>welcom ajay</div> : <div>welcom guest</div>
        // )


        // let msg;

        // if (isLoggedIn) {
        //    msg = <div>welcome ajay</div>
        // }
        // else {
        //     msg = <div>welcome guest</div>
        // }
        // return <div>{msg}</div>;
        // return (
        //     <>

        //   <div>
        //   <div>welcome ajay</div>
        //   <div>welcome guest</div>
        //   </div>
        //   </>
        // )
    }
}

export default _5Condition