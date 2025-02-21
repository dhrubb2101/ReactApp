import React, { Component } from "react";

class MyStateComp extends Component {

    constructor(props){
        super(props);
        this.state = {
            company:"Opteamix",
            numOfEmp:500,
        };
    }

    changeStateData = () => {
        // this.setState({company:"OPTEAMIX Bengaluru",numOfEmp:this.state.numOfEmp+1})
        this.setState((prevState)=>({company:"OPTEAMIX Bengaluru",numOfEmp:prevState.numOfEmp+1}))
    }

    render(){
        const {company,numOfEmp} = this.state;
        return (<div>
            <h2>This is the MyStateComp component,first component created by me on my own!</h2>
            {/* <p>Company Name is: <strong>{this.state.company}</strong> and number of employees are <strong>{this.state.numOfEmp}</strong></p> */}
            <p>Company Name is: <strong>{company}</strong> and number of employees are <strong>{numOfEmp}</strong></p>
            <button type="button" onClick={()=>this.changeStateData()}>Change Data</button>
        </div>)
    }
}

export default MyStateComp