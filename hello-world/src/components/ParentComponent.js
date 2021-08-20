import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            parentName: 'Parent'
        }
        //this.greetParent = this.greetParent.bind(this)
    }


    greetParent(childName) {
        alert(`Hello ${this.state.parentName} ${childName}`)
    }

    // greetParent = (childName) => {
    //     alert(`Hello ${this.state.parentName} ${childName}`)
    // }


    render() {
        return (
            <div>
                <ChildComponent greetHandler={(x) => this.greetParent(x)} />
            </div>
        )
    }
}

export default ParentComponent
