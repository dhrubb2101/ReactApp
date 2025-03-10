import React, { Component } from 'react'

class LifeCycleMethodComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            favColor:" Red"
             
        }
    }

    // static getDerivedStateFromProps(props){
    //     return{
    //         favColor:props.color
    //     }
    // }

    // componentDidMount(){
    //     setTimeout(()=>{
    //         this.setState({favColor:"Blue"})
    //     },2000)
    // }

    shouldComponentUpdate(){
        return true;
    }

    
        getSnapshotBeforeUpdate=(prevProps,prevState)=>{
            document.getElementById("d1").innerHTML = `Before update my favorite was: ${prevState.favColor}`;
            return null
            
        }
    

    
        componentDidUpdate(){
            document.getElementById("d2").innerHTML = `After update my favorite was: ${this.state.favColor}`;
            return null


        }

        changeColor(){
            this.setState({favColor:"brown"})
        }
    
        



    
    render() {
        return (
            <div>
                <h2>This is lifecycle method component</h2>
                <p>My Favourite Color is:<strong>{this.state.favColor}</strong></p>

                <div id="d1"></div>
                <div id="d2"></div>

                <button type='button' onClick={()=>this.changeColor()}>Change color</button>{" "}
                {/* <button type='button' onClick={()=>this.afterUpdate()}>AfterUpdate</button>{" "} */}
            </div>
        )
    }
}

export default LifeCycleMethodComp
