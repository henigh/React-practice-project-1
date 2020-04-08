import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

 class ParentComponent extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
             parentName : 'Parent'
            
          
         }
         this.greetParent= this.greetParent.bind(this)
     }

    greetParent() {
        //  alert(`Hello ${this.state.parentName}`)
         alert('Hi, I am testing child / Parent React components relationship.')
     }
     
    render() {
        return (
            <div>
                <ChildComponent greetHandler= {this.greetParent}/>
                </div>
            
        )
    }
}

export default ParentComponent
