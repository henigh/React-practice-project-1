import React from 'react'

// function Greet () {
//     return <h1> Hello Heni</h1>
// }

const Greet = (props)=> {
//or Greet = ({name, heroName})-- this i 1
console.log (props)
return(
    <div>
     <h1 style = {{color: '#990099'}}>
          Hello {props.name} as {props.heroName} 
          {/* or {name} as {heroName} if 1 is used !  */}
    </h1>
    {props.children}
    </div>
)
}
export default Greet 

