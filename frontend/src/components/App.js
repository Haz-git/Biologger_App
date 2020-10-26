//Dependencies
import React from 'react';
import { Switch, Router, Route } from 'react-router-dom';

//Components
import Navbar from './landingPage/Navbar';
import MainLandingPage from './landingPage/MainLandingPage';
import SignUpForm from './signupPage/SignUpForm';
import history from '../historyObject';
import LoginForm from '../components/loginPage/LoginForm';
import MainDashboard from '../components/Dashboard/MainDashboard';
import AuthenticatedComponents from '../components/authComponents/AuthenticatedComponents';


const App = () => {
    return (
        <>
            <Router history={history}>
                <Navbar />
                <Switch>
                    <Route exact path='/' component={MainLandingPage} />
                    <Route exact path='/signup' component={SignUpForm} />
                    <Route exact path='/login' component={LoginForm} />
                    <AuthenticatedComponents>
                        <Route exact path='/dashboard' component={MainDashboard} />
                    </AuthenticatedComponents>
                </Switch>
            </Router>
        </>
    )
}

export default App;
