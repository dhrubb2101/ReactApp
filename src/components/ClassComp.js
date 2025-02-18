import React, { Component } from "react";

class ClassComp extends Component{

    
    render(){
        const {empName,post} = this.props //destructuring of
        return (<div>
        <h2>This is a Class Component</h2>
        {/* <p>My name is <strong>{this.props.empName},</strong> I am a <strong>{this.props.post}</strong></p>  */}
        <p>My name is <strong>{empName},</strong> I am a <strong>{post}</strong></p> 
        </div>)
    }

}

export default ClassComp;