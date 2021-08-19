import React from 'react'

function FunctionClick() {

    function submitRequest() {
        console.log("Button Clicked")
    }

    return (
        <div>
            <button onClick={submitRequest}>SUBMIT</button>
        </div>
    )
}

export default FunctionClick
