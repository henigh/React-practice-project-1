import React, { Component } from 'react'

// rce to create a reacte class


class Counter extends Component {

 
constructor(props) {
    super(props)

    this.state = {
         count : 0
    }
}
    increment () {
        this.setState({

            count : this.state.count + 1
         },
         () => {console.log('Callback value', this.state.count)})
            
    console.log(this.state.count)
        }

    // incrementFive() {
    //     this.increment()
    //     this.increment()
    //     this.increment()
    //     this.increment()
    //     this.increment()
    // }
    render() {
        return (
            <div>
                <b><div style = {{color : "green"}}>count - {this.state.count} </div></b>

                <div><button onClick = {() => this.increment()}> + 1  </button></div>
            </div>
        )
    }
}

export default Counter
