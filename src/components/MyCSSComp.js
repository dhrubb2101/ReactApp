import React, { Component } from "react";
import './MyCSS.css';
import moduleCss from './Hover.module.css'

class MyCSSComp extends Component {

    myBox={
        border:"3px solid red",
        width:"300px",
        height:"200px",
        backgroundColor:"pink"

    }



    render (){
        return (<div>
             {/* use of internal css */}
             <h2 style={{color:"blue",textTransform:"uppercase" }}>This is my MyCSSComp component.</h2>
             <div style={this.myBox}>Good Morning Friends!</div>

             {/* use of external css */}
             <p className="txt-danger">Welcome You ALL in my CSS Session</p>
             <p className="txt-primary">My name is something that does not matter not right now anyway</p>
             {/* use of module css */}
             <div className={moduleCss.flipbox}>This is Opteamix </div>

        </div>)
    }
}

export default MyCSSComp;