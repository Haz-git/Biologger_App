import React from 'react';
import { Link } from 'react-router-dom';

const SciToolsLanding = () => {
    return (
        <div>
            <h1>This should be the landing page for SciTools</h1>
            <h2>Once completed, It should render out useful Scitools in a grid(?) format</h2>
            <Link to='/scitools/lazylacz'>
                <button>
                    Lazy LacZ
                </button>
            </Link>
        </div>
    )
}

export default SciToolsLanding;