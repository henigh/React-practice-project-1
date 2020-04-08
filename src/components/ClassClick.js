import React, { Component } from 'react'
//Example of event handling from a Class componenet 

class ClassClick extends Component {
    clickHandler(){
        
        console.log('Button Clicked !')
        
    }
    render() {
        return (
            <div>
                <button onClick= {this.clickHandler}> Click to genrate a console.log Event from a Class !</button>
            </div>
        )
    }
}

export default ClassClick
