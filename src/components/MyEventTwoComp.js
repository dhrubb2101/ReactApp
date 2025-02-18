import { Component } from "@angular/core";
import { render } from "@testing-library/react";
import React from "react";

class MyEventTwoComp extends Component{

    render(){
        (<div>
            <h2>THis is MyEventTwoComp Component</h2>
        </div>)
    }

}

export default MyEventTwoComp;