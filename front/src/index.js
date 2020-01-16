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
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const store = createStore(rootReducer);

AOS.init({
    mirror: true,
    duration: 600
})
  
window.addEventListener('load', AOS.refresh);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/login" component={Login} />
                <Route path="/user" component={User} />
                <Route path="/logout" component={Logout} />
                <Route path="/admin" component={AdminProfile} />
            </Switch>
        </Router>
    </Provider>, document.getElementById('root'));
    
serviceWorker.unregister();
