import React from 'react'
//here we use a function componant because we are not going 
// to use state method

function ChildComponent(props) {
    return (
        <div>
            <button onClick = {props.greetHandler}> Click to genrate a page message ! </button>
        </div>
    )
}

export default ChildComponent
