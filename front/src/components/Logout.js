import React , {Component} from "react"
import {Redirect} from "react-router-dom"
import Axios from "axios"

class Logout extends Component{

    constructor(){
        super()
        localStorage.removeItem("token")
    }
    
    
    render(){
        return <Redirect to="/login" />
       
        
        
    }
}

export default Logout;