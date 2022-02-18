import React, { Component } from "react";
//Using props by class component.

class WelcomeMeByName extends Component {

    constructor() {
        super()
        this.state = {
            message: "Login"
        }
    }

    subscribe() {
        this.setState({
            message: "Subscribed"
        })
    }

    render() {
        //don't need to give props as an argument in class component,
        //it is optional, giving no harm
        return (
            <div>
                <h1>Welcome {this.props.name}</h1>
                <h1>You are on {this.state.message} page</h1>
                <button onClick={() => this.subscribe()}>Click Me</button>
            </div>
        )

    }
}

export default WelcomeMeByName