//Dependencies
import React from 'react';
import { Switch, Router, Route } from 'react-router-dom';
import styled from 'styled-components';

//Components
import Navbar from './landingPage/Navbar';
import MainLandingPage from './landingPage/MainLandingPage';
import SignUpForm from './signupPage/SignUpForm';
import history from '../historyObject';
import LoginForm from '../components/loginPage/LoginForm';
import Logout from '../components/Logout';

//Authentication Component:
import AuthenticatedComponents from '../components/authComponents/AuthenticatedComponents';

//Authenticated Components:
import MainDashboard from '../components/Dashboard/MainDashboard';
import Calendar from './Dashboard/Calendar';
import Meetings from '../components/Dashboard/Meetings';
import Messenger from '../components/Dashboard/Messenger';
import CreateBioNote from '../components/Dashboard/CreateBioNote';
import NewBioNote from '../components/Dashboard/NewBioNote';
import ReadBioNote from '../components/Dashboard/ReadBioNote';
import EditBioNote from '../components/Dashboard/EditBioNote';
import DeleteBioNote from '../components/Dashboard/DeleteBioNote';
import SciToolsLanding from './Dashboard/sciTools/SciToolsLanding';

//Styling:

const AppContainer = styled.div`
    background-color: #F6F9FC;
`
const DashboardContainer = styled.div`
    margin-left: 83.9375px;
    padding: 0px;
`


const App = () => {

    return (
        <>
            <AppContainer>
                <Router history={history}>
                    <Navbar />
                    <Switch>
                        <Route exact path='/' component={MainLandingPage} />
                        <Route exact path='/signup' component={SignUpForm} />
                        <Route exact path='/login' component={LoginForm} />
                        <AuthenticatedComponents>
                            <DashboardContainer>
                                <Route exact path='/dashboard' component={MainDashboard} />
                                <Route exact path='/calendar' component={Calendar} />
                                <Route exact path='/meetings' component={Meetings} />
                                <Route exact path='/messenger' component={Messenger} />
                                <Route exact path='/createbionote' component={CreateBioNote} />
                                <Route exact path='/logout' component={Logout} />
                                <Route exact path='/newbionote' component={NewBioNote} />
                                <Route exact path='/readbionote/:id' component={ReadBioNote} />
                                <Route exact path='/editbionote/:id' component={EditBioNote} />
                                <Route exact path='/deletebionote/:id' component={DeleteBioNote} />
                                <Route exact path='/scitools' component={SciToolsLanding} />
                            </DashboardContainer>
                        </AuthenticatedComponents>
                    </Switch>
                </Router>
            </AppContainer>
        </>
    )
}

export default App;
