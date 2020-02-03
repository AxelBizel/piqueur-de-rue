import React from "react"
import { Redirect } from "react-router-dom"
import Axios from "axios"
import './login.css'
import {IPserver} from '../conf/confIP'



export default class Login extends React.Component {
    constructor() {
        super()
        let loggedIn = false
        const token = localStorage.getItem("token")
        if (token) loggedIn = true

        this.state = {
            login: "",
            password: "",
            return: false,
            loggedIn,
            error: ""
        }
        this.onChange = this.onChange.bind(this)
        this.formSubmit = this.formSubmit.bind(this)
        this.onReturn = this.onReturn.bind(this)
    }

    onChange(ev) {
        this.setState({
            [ev.target.name]: ev.target.value
        })
    }


    onReturn() {
        this.setState({
            return: true
        })
    }

    async formSubmit(ev) {
        ev.preventDefault()
        const { login, password } = this.state
        try {
            const result = await Axios.post(`${IPserver}/api/login`,
                { login, password })
            // if(result.data.token)
            if (result.data.token) {
                localStorage.setItem("token", result.data.token)
                this.setState({
                    loggedIn: true
                })
            }
        } catch (err) {
            alert(err.response.data)
            this.setState({
                error: err.response.data,
            })
            
        }
    }


    render() {
        if (this.state.loggedIn === true) {
            return <Redirect to="/admin" />
        }
      
        if(this.state.return === true){
            return <Redirect to="/" />
        }
        return (
            <div className="flexContainerLogin">
                <div class="wrapperLogin fadeInDown">
                    <div id="formContent">
                        <div class="fadeIn first">
                            <img src={require("../img/logo/logoPiqueurWhiteFooter.png")} id="icon" alt="User Icon" />
                        </div>
                        <form id="formLogin" onSubmit={this.formSubmit}>
                            <input type="text" id="login" class="fadeIn second" value={this.state.login} onChange={this.onChange} name="login" placeholder="Identifiant" className='inputForm' />
                            <input type="text" id="password" class="fadeIn third" value={this.state.password} onChange={this.onChange} name="password" placeholder="Mot de passe" className='inputForm'/>
                            <input type="submit" id="submitLogin" class="fadeIn fourth" value="Connexion" className='inputForm submitLogin'/>
                            {this.state.error}
                        </form>

                        <div id="formFooter" class="fadeIn fourth">
                            {/* <a class="underlineHover" href="#">Mot de passe oublié ?</a><br /> */}
                            <a class="underlineHover" href="/" onClick={this.onReturn}>Retour</a>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}
