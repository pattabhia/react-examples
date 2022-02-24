import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    changeMe() {
        // this.setState({
        //     count: this.state.count + 1
        // }, () => console.log(this.state.count))

        //always set state thru setState Argument

        this.setState(prevState => ({
            count: prevState.count + 1
        }))
    }

    testFive() {
        this.changeMe()
        this.changeMe()
        this.changeMe()
        this.changeMe()
        this.changeMe()
    }

    render() {
        return (
            <div>
                <div>count - {this.state.count}</div>
                <button onClick={() => this.testFive()}>CLICK ME</button>
            </div>
        )
    }
}
export default Counter