import React, { Component } from 'react'

export class _8ClickComponentTwo extends Component {
    
    render() {

        const {count,increment} = this.props;

        return (
            <div>
                <button onClick={() => { increment() }}>clicke {count} times</button>
            </div>
        )
    }
}

export default _8ClickComponentTwo