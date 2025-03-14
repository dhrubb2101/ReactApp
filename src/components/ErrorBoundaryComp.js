import React, { Component } from 'react'

class ErrorBoundaryComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isError : false
        }
    }

    static getDerivedStateFromError(){
        return {
            isError:true
        }

    }

    componentDidCatch(error,errorInfo){
        console.log("Error Caught by Error Boundary:",error)
        // console.error()

    }
    
    render() {
        const {isError} = this.state;
        if(isError){
            return <h2>Something Went Wrong!</h2>
        }
        return this.props.children;
        // return (
        //     <div>
        //         <h2> This is Error Boundary Component</h2>
        //     </div>
        // )
    }
}

export default ErrorBoundaryComp
