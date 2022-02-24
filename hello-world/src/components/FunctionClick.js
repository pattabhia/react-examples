import React from 'react'

function FunctionClick() {

    function submit() {
        console.log("Button Clicked")
    }

    return (
        <div>
            <button onClick={submit}>SUBMIT</button>
        </div>
    )
}

export default FunctionClick
