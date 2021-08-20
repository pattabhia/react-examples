import React, { Component } from 'react'

class ChildComponent extends Component {

    render() {
        return (
            <div>
                <h2>{this.props.name}</h2>
                <button onClick={() => this.props.greetHandler('CHILD-NEW')}>Click Parent</button>
            </div>
        )
    }
}

export default ChildComponent


// import React from 'react'
// function ChildComponent(props) {
//     return (
//         <div>
//             <button onClick={() => props.greetHandler('CHILD')}>Click Parent</button>
//         </div>
//     )
// }

// export default ChildComponent
