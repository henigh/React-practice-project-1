import React, { Component } from 'react'
// rconst snippet to add a constructor !

 class EventBind extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
             message : 'hello'
              
         }

        //  this.clickHandler = this.clickHandler.bond(this) this is comment 1
     }
     clickHandler(){
         this.setState({
            message : 'Good Bye ! '
         })
     }
    
    render() {
        return (
            <div>
                <div> {this.state.message}</div>
                <button onClick={this.clickHandler.bind(this)} > Click to leave.. </button>
                {/* Or :
                <button onClick={this.clickHandler} > Click ! </button>
                wich is is the official method, but only if comment one is used ! */}
                {/* also: */}
                {/* look at the Message.js example using arrow function wish is more efficient !  */}
            </div>
        )
    }
}

export default EventBind
