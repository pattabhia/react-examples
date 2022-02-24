import React from 'react'

function GreetPage(props) {

    return (
        <div>
            <h1>Greetings</h1>
            <button onClick={() => props.greetPageHandler("FirstMenu")}>SayHello</button>
        </div>
    )
}

export default GreetPage
