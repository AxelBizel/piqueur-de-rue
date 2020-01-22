import React from "react"
import { Redirect } from "react-router-dom"
import Axios from "axios"
import './login.css'

export default class Login extends React.Component {


    constructor() {
        super()
        let loggedIn = false
        const token = localStorage.getItem("token")
        if (token) loggedIn = true

        this.state = {
            login: "",
            password: "",
            return: true,
            createProfile: true,
            loggedIn,
            error: ""
        }
        this.onChange = this.onChange.bind(this)
        this.formSubmit = this.formSubmit.bind(this)
        this.onReturn = this.onReturn.bind(this)
        this.onCreateProfile = this.onCreateProfile.bind(this)
    }

    onChange(ev) {
        this.setState({
            [ev.target.name]: ev.target.value
        })
    }

    onCreateProfile() {
        this.setState({
            createProfile: true
        })
    }
    onReturn() {
        this.setState({
            return: false
        })
    }

    async formSubmit(ev) {
        ev.preventDefault()
        console.log(this.state)
        const { login, password } = this.state
        try {
            const result = await Axios.post("http://localhost:5000/login",
                { login, password })
            // if(result.data.token)
            if (result.data.token) {
                localStorage.setItem("token", result.data.token)
                this.setState({
                    loggedIn: true
                })
            }
        } catch (err) {
            this.setState({
                error: err.message
            })
        }
    }


    render() {
        if (this.state.loggedIn === true) {
            return <Redirect to="/user" />
        }
        if (this.state.return === false) {
            return <Redirect to="/" />
        }
        // if(this.state.createProfile === true){
        //     return <Redirect to="/profile" />
        // }
        return (
            <div className="flexContainer">
                <div class="wrapper fadeInDown">
                    <div id="formContent">
                        <div class="fadeIn first">
                            <img src={require("../img/logo/logoPiqueurWhiteFooter.png")} id="icon" alt="User Icon" />
                        </div>
                        <form id="formLogin" onSubmit={this.formSubmit}>
                            <input type="text" id="login" class="fadeIn second" value={this.state.login} onChange={this.onChange} name="login" placeholder="Login" className='inputForm' />
                            <input type="text" id="password" class="fadeIn third" value={this.state.password} onChange={this.onChange} name="password" placeholder="Mot de passe" className='inputForm'/>
                            <input type="submit" id="submit" class="fadeIn fourth" value="Log In" className='inputForm'/>
                            {this.state.error}
                        </form>

                        <div id="formFooter" class="fadeIn fourth">
                            <a class="underlineHover" href="#" onClick={this.onCreateProfile}>Créer profil</a><br />
                            <a class="underlineHover" href="#">Mot de passe oublié ?</a><br />
                            <a class="underlineHover" href="#" onClick={this.onReturn}>Retour</a>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}