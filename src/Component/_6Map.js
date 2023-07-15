import React, { Component } from 'react'
import _6Refactor from './_6Refactor';

export class _6Map extends Component {


    render() {
        const person = [{
            id: 1,
            name: 'Bruce',
            age: 30,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Clark',
            age: 25,
            skill: 'Angular'
        },
        {
            id: 3,
            name: 'Diana',
            age: 28,
            skill: 'Vue'
        }
        ];

        const personList = person.map(anything => (
            <_6Refactor key={anything.id} alsoAnything={anything} />
        ))


        return (
            <div>

                {personList}

            </div>
        )
    }
}

export default _6Map