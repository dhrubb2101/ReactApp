import React, { useState } from 'react'

const FormValComp = () => {
    const [user,setUser] = useState({
        userName :'',
        userPass :''
    })

    const inputChangeHandler = (event) => {
        // console.log(event.target.type)
        // console.log(event.target.name)
        // console.log(event.target.value)
    setUser({...user,[event.target.name]:event.target.value})
    }

    const checkData = (event) => {
        event.preventDefault();

        if(user.userName.trim()===""){
            window.alert("user name is required");
            return false;
        }

        if(!user.userName.trim().match("^[a-zA-Z]{5,20}$")){
            window.alert("user name must be in a proper format");
            return false;
        }

        if(user.userPass.trim()===""){
            window.alert("user password is required");
            return false;
        }

        if(user.userPass.trim().match("^[a-zA-Z]{5,20}$")){
            window.alert("user password must be in a proper format");
            return false;
        }

       
    window.alert(JSON.stringify(user));

    }


    return (
        <div>
            <h2>This is Form Validation components</h2>
            <form onSubmit={checkData}>
                <label>Enter User Name:</label>
                {/* //to get a value from user you apply input control  */}
                <input type='text' name='userName' onChange={inputChangeHandler} value={user.userName}/> <br/>
                {/* <button type='submit'>Submit</button> */}

                <label>Enter User Password:</label>

                <input type='text' name='userPass' onChange={inputChangeHandler} value={user.userPass}/> <br/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default FormValComp
