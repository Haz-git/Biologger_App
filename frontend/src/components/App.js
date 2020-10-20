//Dependencies
import React from 'react';
import { Switch, Router, Route } from 'react-router-dom';

//Components
import Navbar from './landingPage/Navbar';
import MainLandingPage from './landingPage/MainLandingPage';
import SignUpForm from './signupPage/SignUpForm';
import history from '../historyObject';
import LoginForm from '../components/loginPage/LoginForm';

const App = () => {
    return (
        <>
            <Router history={history}>
                <Navbar />
                <Switch>
                    <Route exact path='/' component={MainLandingPage} />
                    <Route exact path='/signup' component={SignUpForm} />
                    <Route exact path='/login' component={LoginForm} />
                </Switch>
            </Router>
        </>
    )
}

export default App;
