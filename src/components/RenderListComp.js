import React, { Component } from 'react'

class RenderListComp extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             breakfast : [
                {id :1 , name:"Poha"},
                {id :2 , name:"Upma"},
                {id :3 , name:"Idli"},
                {id :4 , name:"Vada Sambhar"},
                {id :5 , name:"Dosa"}
             ],
             employee:[
                {id:101,name:"Rajeev",post:"fullstack developer", salary:85000,gender:"male",address:"Bengaluru"},
                {id:102,name:"Rahul",post:"Java developer", salary:85000,gender:"male",address:"Pune"},
                {id:103,name:"Radha",post:"Python developer", salary:85000,gender:"female",address:"Mumbai"},
                {id:104,name:"Anmol",post:"MERN stack developer", salary:85000,gender:"male",address:"Hyderabad"},
                {id:105,name:"Kasturi",post:"MERN stack developer", salary:85000,gender:"female",address:"Nagpur"},
                {id:106,name:"Aadesh",post:"fullstack developer", salary:85000,gender:"male",address:"Delhi"},
                {id:107,name:"Aditya",post:"Java developer", salary:85000,gender:"male",address:"Chennai"},
             ]
        }
    }
    
    render() {
        const {breakfast,employee} = this.state;
        return (
            <div>
                <h2>this is rendering list component</h2>
                <ul> 
                    {/*  //opening closing curly brackets it allows us to use and write your data or logical code */}
                    {breakfast.map((val,index)=>{
                        // return <li key={val.id}>{val.name}</li>
                     return <li key={index}>{val.name}</li>
                    })}                 
                </ul>
                <hr/>

            <table className='table table-hover table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>Sr No.</th><th>Name</th><th>Post</th><th>Salary</th><th>Gender</th><th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {employee.length>0 && employee.map((val,index)=>{
                        return <tr key={(val.id)}>
                            <td>{index+1}</td>
                            <td>{val.name}</td>
                            <td>{val.post}</td>
                            <td>{val.salary}</td>
                            <td>{val.gender}</td>
                            <td>{val.address}</td>
                        </tr>

                    })}
                </tbody>
            </table>
            </div>
        )
    }
}

export default RenderListComp
