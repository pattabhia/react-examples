import React, { Component } from "react";
//Using props by class component.

class WelcomeMeByName extends Component {

    render(props) {

        return (
            <div>
                <h1>Welcome {this.props.name}</h1>
            </div>
        )

    }
}

export default WelcomeMeByName