//Dependencies
import React from 'react';
import { Switch, Router, Route } from 'react-router-dom';

//Components
import Navbar from './landingPage/Navbar';
import MainLandingPage from './landingPage/MainLandingPage';
import SignUpForm from './signupPage/SignUpForm';
import history from '../historyObject';
import LoginForm from '../components/loginPage/LoginForm';

//Authentication Component:
import AuthenticatedComponents from '../components/authComponents/AuthenticatedComponents';

//Authenticated Components:
import MainDashboard from '../components/Dashboard/MainDashboard';
import Groups from '../components/Dashboard/Groups';
import Meetings from '../components/Dashboard/Meetings';
import Messenger from '../components/Dashboard/Messenger';
import CreateBioNote from '../components/Dashboard/CreateBioNote';


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
                        <Route exact path='/groups' component={Groups} />
                        <Route exact path='/meetings' component={Meetings} />
                        <Route exact path='/messenger' component={Messenger} />
                        <Route exact path='/createbionote' component={CreateBioNote} />
                    </AuthenticatedComponents>
                </Switch>
            </Router>
        </>
    )
}

export default App;
