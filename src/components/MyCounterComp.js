import React, { Component } from "react";

class MyCounterComp extends Component{

    constructor(props){
        super(props);
        this.state = {
            numOfEmp:500,
        };
    }

    
    AddEmp = () => {

        this.setState((prevState)=>({numOfEmp:prevState.numOfEmp+1}));
    }
    RemoveEmp = () => {
        this.setState((prevState)=>({numOfEmp:prevState.numOfEmp-1}));

    }
    ResetEmp = () => {
        this.setState((prevState)=>({numOfEmp:prevState.numOfEmp=30}));

    }

    render(){
        const {numOfEmp} = this.state;
        return (<div>
            <h2>This is the MyCounterComp component,component created by me on my own and it lists the increment,decrement and reset counter !</h2>
            {/* <p>Company Name is: <strong>{this.state.company}</strong> and number of employees are <strong>{this.state.numOfEmp}</strong></p> */}
            <p>Number of Employees are : {numOfEmp}</p>
            <button type="button" onClick={()=>this.AddEmp()}>Increment</button>
            <button type="button" onClick={()=>this.RemoveEmp()}>Decrement</button>
            <button type="button" onClick={()=>this.ResetEmp()}>Reset</button>
        </div>)
    }

}

export default MyCounterComp;