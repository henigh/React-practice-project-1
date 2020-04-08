//Example of event handling from a Function componenet 
// this functional component generated using the snippet
//rfce
import React from 'react'

function FunctionClick() {
    function clickHandler(){
        console.log('Button Clicked ! ')

    }
    return (
        <div>
            <button onClick= {clickHandler} > Click to genrate a console.log Event from a Function !  </button>
        </div>
    )
}

export default FunctionClick
