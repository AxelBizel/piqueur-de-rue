// import React , {Component} from "react"
// import { Redirect } from "react-router-dom"
// import Axios from "axios"

//       class Login extends Component {
//         constructor(props) {
//           super(props)
//           let loggedIn = false
//           const token = localStorage.getItem("token")
//           if (token) loggedIn = true
//             this.state = {
//             login: "TimmyRodger",
//             password: "timmyrodger",
//             loggedIn,
//             error: ""
//             }
//         this.onChange = this.onChange.bind(this)
//         this.formSubmit = this.formSubmit.bind(this)
//   }

//   onChange(ev) {
//     this.setState({
//       [ev.target.name]: ev.target.value
//     })
//   }

//   async formSubmit(ev) {
//     ev.preventDefault()
//     const { login, password } = this.state
//     try {
//       const token = await Axios.post("http://localhost:5000/login", { login, password })
//       localStorage.setItem("token", token)
//       this.setState({
//         loggedIn: true
//       })
//     } catch (err) {
//       console.log(err)
//       this.setState({
//         error: err.message
//       })
//     }
//   }

//   render() {
//     if (this.state.loggedIn === true) {
//       return <Redirect to="/user" />
//     }
//     return (
//       <form onSubmit={this.formSubmit}>
//         <input type="text" placeholder="username" value={this.state.login} onChange={this.onChange} name="login" />
//         <input type="password" placeholder="password" value={this.state.password} onChange={this.onChange} name="password" />
//         <input type="submit" />
//         {this.state.error}
//       </form>
//     )
//   }
// }

// export default Login;


import React from "react"
import {Redirect} from "react-router-dom"
import Axios from "axios"

export default class Login extends React.Component{

    constructor(){
        super()
        let loggedIn = false
        
        const token = localStorage.getItem("token")
        if(token) loggedIn = true

        this.state = {
            login: "",
            password: "",
            loggedIn,
            error: ""
        }
        this.onChange =  this.onChange.bind(this)
        this.formSubmit = this.formSubmit.bind(this)
    }

    onChange(ev){
        this.setState({
            [ev.target.name]: ev.target.value
        })
    }

    async formSubmit(ev){
        ev.preventDefault()
        const {login, password} = this.state
        try {
            const token = await Axios.post("http://localhost:5000/login", {login, password})
            localStorage.setItem("token", token)
            this.setState({
                loggedIn: true
            })
        } catch (err) {
            this.setState({
                error: err.message
            })
        }
    }

    render(){
        if(this.state.loggedIn === true){
            return <Redirect to="/user" />
        }
        return(
            <form onSubmit={this.formSubmit}>
                <input type="text" placeholder="username" value={this.state.username} onChange={this.onChange} name="username" />
                <input type="password" placeholder="password" value={this.state.password} onChange={this.onChange} name="password" />
                <input type="submit" />
                {this.state.error}
            </form>
        )
    }
}