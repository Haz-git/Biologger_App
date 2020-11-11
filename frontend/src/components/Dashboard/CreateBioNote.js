import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { v4 as uuid } from 'uuid';

//Components:
import BioNoteCard from './BioNoteCard';

//Render:

const CreateBioNote = ({ bionotes }) => {

    const renderNotes = () => (
        bionotes.map(note => (
            <BioNoteCard key={uuid()} name={note.bioName} />
        ))
    )

    return (
        <h1>
            <h1>Your Bio-Notes</h1>
            <div>
                {renderNotes()}
            </div>
            <div>
                <button>
                    <Link to='newbionote'>Create New Bionote</Link>
                </button>
            </div>
        </h1>
    )
}

const mapStateToProps = state => {
    return {
        bionotes: state.bionotes.bionotes,
    }
}


export default connect(mapStateToProps)(CreateBioNote);
