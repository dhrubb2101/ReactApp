import React, { Component } from "react";

class MyEventTwoComp extends Component{

    greet = () => {
        window.alert("Good Morning my dear Friends");
    }

    welcome = (comp,...emp) => {
        window.alert(`Welcome your ${emp} in ${comp}`)
    }

    render(){
        return (<div>
            <h2>THis is MyEventTwoComp Component</h2>
            <button type="button" onClick={()=>this.greet()}>Call greet Method</button>
            <h2 onMouseOver={()=>this.welcome("Opteamix","Dhrubb","Praveen","ritika")}>Hover on me, a pop-up will appear.</h2>
        </div>)
    }

}

export default MyEventTwoComp;