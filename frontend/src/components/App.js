//Dependencies
import React from 'react';
import { Switch, Router, Route } from 'react-router-dom';

//Components
import Navbar from './landingPage/Navbar';
import MainLandingPage from './landingPage/MainLandingPage';
import signupForm from './signupPage/signupForm';
import history from '../historyObject';

const App = () => {
    return (
        <div>
            <Router history={history}>
                <Navbar />
                <Switch>
                    <Route exact path='/' component={MainLandingPage} />
                    <Route exact path='/signup' component={signupForm} />
                </Switch>
            </Router>
        </div>
    )
}

export default App;
