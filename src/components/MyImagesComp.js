import React, { Component } from "react";
import dosa from '../shared/images/katrina.jpg';
import jalebi from '../shared/images/jalebi.jpg';

import staticdata from "../shared/constant/constantData";

class MyImagesComp extends Component {
    render(){
        return (<div>
            <h2>This is my Image Component</h2>
            <img src={dosa} alt="prabhas" height="200px" width="200px"/>
            <img src={jalebi} alt="jalebi" height="200px" width="200px"/> <br/>
            <video src={staticdata.boat} controls></video>
            <audio src={staticdata.ado} controls></audio>
            <img src={staticdata.samosa6} alt="prabhas" height="200px" width="200px"/>
            

        </div>)
    }
}

export default MyImagesComp;