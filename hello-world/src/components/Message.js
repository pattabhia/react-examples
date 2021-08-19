import React, { Component } from 'react'

class Message extends Component {

    constructor() {
        super()
        this.state = {
            message: "welcome visitor"
        }
    }

    changeMessage() {
        this.setState({
            message: "Thank you"
        })
    }

    render() {
        return (
            <div>
                <p>Pattu</p>
                <h1>You are almost there!</h1>
                <h2>{this.state.message}</h2>
                <button onClick={() => this.changeMessage()}>SUBMIT</button>
            </div>
        )
    }
}
export default Message
