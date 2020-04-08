import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            isLoggedIn : false
             
        }
    }
    // or using let message if(condition) message = , else message = 
    // or using this.state.isLogged ?
    // <div> Welcome Heni</div>
    // <div> Welcome Guests</div>
    // or using return this.state.isLoggedIn && <div> Welcom Heni</div>
    render() {
        if (this.state.isLoggedIn){
            return(
            <div> Welcome Heni </div>
             )
             } else{
                 return(
                     <div style = {{color : 'red'}}> Welcome Guest</div>
                 )

        }
        // return (
        //     <div>
        //     <div style = {{color : 'red'}}> 
        //         Welcome To my first React projct for testing
        //     </div>
        //     <div>
        //         Welcome Guest
        //     </div>
        //     </div>
        // )
    }
}
export default UserGreeting
