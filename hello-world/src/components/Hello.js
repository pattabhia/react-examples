import React from 'react'

const Hello = () => {
    /*  return (
        <div><h1>Hello MICHAEL</h1></div> 
     ) */

    return React.createElement('div', {id:'helloMessage',className: 'helloMessageClass'}, React.createElement('h1',null,'Hello Chennai')) 
}
export default Hello