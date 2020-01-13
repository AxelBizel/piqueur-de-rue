import React, {Component} from "react"
import {Redirect} from "react-router-dom"

        class User extends Component{
            constructor(){
            super()
            let loggedIn = false
            const token = localStorage.getItem("token")
            if(token) loggedIn = true
            this.logout = this.logout.bind(this)
            this.state= {
            loggedIn
        }
    }

    logout(){
        this.setState({
            loggedIn: false
        })
    }

    render(){
        if(this.state.loggedIn === false){
            return <Redirect to="/" />
        }
        return(
            <div>
                <h1 style = {{color : 'red'}}>User authenticated</h1>
                <button onClick={this.logout}>Logout</button>
            </div>
        )
    }
}

export default User;