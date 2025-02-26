import React, { Component } from 'react'

class ConditionalRenComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            isCond:true
             
        }
    }
    
    render() {
        let msg="";
        // 1. use of if/else
        if( this.state.isCond){
            // return (
            //     <div>
            //         <h2>Admin Login succesfully!</h2>
            //     </div>
            // )
            msg="Admin Login Succesfully!"
        }else{
            // return(<div>
            //     <h2>User Login succesfully!</h2>
            // </div>)
            msg="User Login Succesfully!"
        }
        // 2. use of element as variabele
        // return <h2>{msg}</h2>

        //3. use of ternary operator
        // return (!this.state.isCond) ? <h2>Admin Login succesfully!</h2> : <h2>User Login succesfully!</h2>

        //4. use of short circuit
        return this.state.isCond && <h2>Admin Login succesfully!</h2>
       
    }
}

export default ConditionalRenComp;
