//Dependencies
import React from 'react';
import { Switch, Router, Route } from 'react-router-dom';

//Components
import Navbar from './landingPage/Navbar';
import MainBackdrop from './landingPage/MainBackdrop';
import MainBodyblock from './landingPage/MainBodyblock';
import Footer from './landingPage/Footer';
import signupForm from './signupPage/signupForm';
import history from '../historyObject';

const App = () => {
    return (
        <div>
            <Router history={history}>
                <Navbar />
                <Switch>
                    <Route exact path='/signup' component={signupForm} />
                    <MainBackdrop />
                    <MainBodyblock />
                    <Footer />
                </Switch>
            </Router>
        </div>
    )
}

export default App;
