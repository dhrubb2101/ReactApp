import React, { Component } from "react";

class MyInfoComp extends Component {

    render(){
        const {empName,post,company,address,contact,gender} = this.props
        return (<div>
            <h2>This is the component where Employee's information is being displayed</h2>
            <p>My name is <strong>{empName}</strong></p>
            <p>I am a <strong>{post}</strong></p> 
            <p>My company <strong>{company} is awesome.</strong></p>
            <p>It's address is <strong>{address}</strong></p>
            <p>My contact number is <strong>{contact}</strong></p>
            <p>My Gender is <strong>{gender}</strong></p>




        </div>)
    }
}

export default MyInfoComp;