import React, { Component } from 'react';
import { userConsumer } from './_9user';

class _9contextB extends Component {
    render() {
        return (
            <userConsumer>
                {name => { return <div>hello {name}</div> }}
            </userConsumer>
        );
    }
}

export default _9contextB;
