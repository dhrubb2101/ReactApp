import React, { Component } from 'react'
import HOC from './HOC'

class HoverCounter extends Component {

    // constructor(props) {
    //     super(props)
    
    //     this.state = {
    //          count:0
    //     }
    // }

    // incrementCounter = () =>{
    //     this.setState((prevState)=>({count:prevState.count+1}))
    // }
    
    render() {
        return (
            <div>
                {/* <h2>This is Hover Counter component</h2>
                <p onMouseOver={()=> (this.incrementCounter())}> increment counter value when a mouse hovers it increases <strong>Count : {this.state.count}</strong></p> */}
                <h2>This is Hover Counter component</h2>
                <p onMouseOver={()=> (this.props.incrementCounter())}> increment counter value when a mouse hovers it increases <strong>Count : {this.props.count}</strong></p>
            </div>
        )
    }
}

export default HOC(HoverCounter);
