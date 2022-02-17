import React from "react";

//using props by functional component
const GreetMeByName = (props) => {
    return (
        <div>
            <h1>Hello {props.name}</h1>
        </div>

    )
}

export default GreetMeByName