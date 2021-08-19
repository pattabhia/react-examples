import React, { Component } from 'react'

class Welcome extends Component {
    render() {
        const { age } = this.props
        return <h1>Hello Delhi {age}</h1>
    }
}

export default Welcome