import React from 'react';
import { Link } from 'react-router-dom';

//Render:

const CreateBioNote = () => {
    return (
        <>
            <h1>Your Bio-Notes</h1>
            <div>
                Your currently have no bionotes.
            </div>
            <div>
                <button>
                    <Link to='newbionote'>Create New Bionote</Link>
                </button>
            </div>
        </>
    )
}


export default CreateBioNote;
