import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route , Switch } from 'react-router-dom';
import Login from './components/Login'
import User from './components/User'
import Logout from './components/Logout'

ReactDOM.render(<Router>
    <div>
      <Route  exact path='/' component={App} />
      <Route path="/login" component={Login} />
      <Route path="/user" component={User} />
      <Route path = "logout" component = {Logout}/>
    </div>
    </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
