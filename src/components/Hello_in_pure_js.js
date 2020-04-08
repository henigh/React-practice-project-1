// This Function is create with pure JS and not JSX 
import React from 'react'
const HelloPJS = () => {

    return React.createElement('div', {id : 'hello', className : 'dummyClass'}, 
    React.createElement('h1',null, 'Hello I am a pure JS code'))
}

export default HelloPJS;