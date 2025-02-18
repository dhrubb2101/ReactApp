

// const FunctionComp = (props) => {   
const FunctionComp = ({empName,post}) => {   

    
    // to create a arrow function this is the syntax const FunctionComp = () => { //
    //to create a normal function the syntax is function FunctionComp(){}

    // const {empName,post} =props; //destructuring of props
    return( <div>
     <h2>This is function component</h2>
     {/* <p>My name is <strong>{props.empName},</strong> I am a <strong>{props.post}</strong></p> */}
     <p>My name is <strong>{empName},</strong> I am a <strong>{post}</strong></p>
     </div>)
}       

export default FunctionComp;