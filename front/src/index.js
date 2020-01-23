import React from 'react';
import ReactDOM from 'react-dom';
import AOS from 'aos'
import './index.css';
import Login from './components/Login'
import User from './components/User'
import Logout from './components/Logout'
import AdminProfile from './components/AdminProfile'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import AdminPortfolio from './components/AdminUpdatePortfolio';
const store = createStore(rootReducer);

AOS.init({
    mirror: true,
    duration: 600
})

window.addEventListener('load', AOS.refresh);

const PrivateRoute = (props) => {
    if (localStorage.getItem("token") )
        return <Route {...props} />
    else
        return <Redirect to='/login'/>
}
const PublicRoute = (props) => {
    if (!localStorage.getItem("token") )
        return <Route {...props} />
    else
        return <Redirect to='/'/>
}

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path="/" component={App} />
                <PublicRoute exact path="/login" component={Login} />
                <PrivateRoute path="/user" component={User} />
                <Route path="/logout" component={Logout} />
                <PrivateRoute path="/admin" component={AdminProfile} />
                <Route path="/adminportfolio" component={AdminPortfolio} />
            </Switch>
        </Router>
    </Provider>, document.getElementById('root'));

serviceWorker.unregister();

