import React, { Component } from 'react'

class ClassClick extends Component {

    clickHandler() {
        console.log("Class Click Handler")
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>CLASS CLICK</button>
            </div>
        )
    }
}

export default ClassClick
