// This Function is create with JSX 
import React from 'react'

const Hello = () => {
    return(
        <div className = 'dummyClass'>
            {/* this is how to change colors in React */}
            <h1 style = {{color : 'blue'}}> Hello </h1> 
        </div>
    
    )
}
export default Hello;