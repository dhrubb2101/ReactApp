import React, { Component } from 'react'
import ChildComp from './ChildComp'
import MyPureComp from './MyPureComp';

class ParentComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            empName:"Dhrubb",
            empSalary:850000
             
        };
    }
    
    changeData = () => {
        this.setState((prevState)=>({empName:"Dhrubb Gupta",empSalary:prevState.empSalary+1000}));
    }



    render() {
        console.log("my parent component render");
        const{empName,empSalary} = this.state;
        return (
            <div>
                <h2>This is Parent Component</h2>
                <p>Employee Name Is : <strong>{empName}</strong>, Salary is :<strong>{empSalary}</strong></p>
                <button type='button' className="btn btn-primary" onClick={()=>this.changeData()}>Change State Data</button>
                <hr/>
                <ChildComp name={empName} salary={empSalary} eventData={this.changeData}></ChildComp>
                <hr/>
                <MyPureComp name={empName}></MyPureComp>
            </div>
        )
    }
}

export default ParentComp
