import React from "react"
import { Redirect } from "react-router-dom"
import AdminProfile from "./AdminProfile"

export default class User extends React.Component {

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
        this.setState({
            loggedIn: false
        })
    }

    render() {
        if (this.state.loggedIn === false) {
            return <Redirect to="/logout" />
        }
        return (
            <div>
                <AdminProfile />
                <button onClick={this.logout}>Logout</button>
            </div>
        )
    }
}