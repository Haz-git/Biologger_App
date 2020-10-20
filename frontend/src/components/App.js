//Dependencies
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

//Components
import Navbar from './landingPage/Navbar';
import MainBackdrop from './landingPage/MainBackdrop';
import MainBodyblock from './landingPage/MainBodyblock';
import Footer from './landingPage/Footer';
import signupForm from './signupPage/signupForm';

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Route exact path='/signup' component={signupForm} />
                <MainBackdrop />
                <MainBodyblock />
                <Footer />
            </BrowserRouter>
        </div>
    )
}

export default App;
