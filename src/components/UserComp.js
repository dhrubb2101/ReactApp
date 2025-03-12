import React, { Component } from 'react'

class UserComp extends Component {
    render() {
        if(this.props.user==="Aadesh"){
            throw Error("Not a User")
        }
         return <p>{this.props.user} Login Succesfully</p>;
         
         
         //(
        //         <div>
        //             <h2>This is User Component</h2>
        //             <p>User Name is : <strong>{this.props.user}</strong></p>
                    
        //         </div>
        //     )
        
       
    }
}

export default UserComp
