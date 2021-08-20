import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            <button onClick={() => props.greetHandler('CHILD')}>Click Parent</button>
        </div>
    )
}

export default ChildComponent
