import React from "react"
import { Button } from "reactstrap";
import { Redirect } from "react-router-dom"
// import AdminProfile from "./AdminProfile"


const StyleButtonLogout = {
    width : "auto",
    height : "auto",
    padding : "20px 30px",
    fontSize : "20px"
}

export default class Logout extends React.Component {

    constructor() {
        super()
        let loggedIn = false

        const token = localStorage.getItem("token")
        if (token) loggedIn = true
        this.logout = this.logout.bind(this)
        this.state = {
            loggedIn
        }
    }

    logout() {
        localStorage.removeItem ("token")
        this.setState({
            loggedIn: false
        })
    }

    render() {
        if (this.state.loggedIn === false) {
            return <Redirect to="/" />
        }
        return (
            <div>
                <Button style={StyleButtonLogout} color="danger" onClick={this.logout}>Logout</Button>
            </div>
        )
    }
}