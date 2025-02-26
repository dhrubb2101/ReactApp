import React, { Component, PureComponent } from 'react'

class MyPureComp extends PureComponent {


  
    render() {
        console.log("my pure component render");
        return (
            <div>
                <h2>This is my pure component</h2>
                <p>Employee Name is: {this.props.name}</p>
            </div>
        )
    }
}

export default MyPureComp
