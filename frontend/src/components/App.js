//Dependencies
import React from 'react';

//Components
import Navbar from './landingPage/Navbar';
import MainBackdrop from './landingPage/MainBackdrop';
import MainBodyblock from './landingPage/MainBodyblock';

const App = () => {
    return (
        <div>
            <Navbar />
            <MainBackdrop />
            <MainBodyblock />
        </div>
    )
}

export default App;
