import React, { Component } from 'react'
import GreetPage from './GreetPage'

class DisplayPage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            pageName: "DisplayPages"
        }
    }

    sayHello = (childName) => {
        this.setState({
            pageName: childName
        })
    }

    render() {

        return (
            <div>
                {this.state.pageName}
                <GreetPage greetPageHandler={this.sayHello} />
            </div>

        )
    }
}



export default DisplayPage