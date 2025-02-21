import React, { Component } from "react";

class MyCSSComp extends Component {
    render (){
        return (<div>
             {/* use of internal css */}
             <h2 style={{color:"blue",textTransform:"uppercase" }}>This is my MyCSSComp component.</h2>
        </div>)
    }
}

export default MyCSSComp;