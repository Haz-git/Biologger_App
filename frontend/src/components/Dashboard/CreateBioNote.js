import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { getBioNotes } from '../../redux/userBioNote/bionoteActions';

//Components:
import BioNoteCard from './BioNoteCard';

//Render:

const CreateBioNote = ({ bionotes, getBioNotes }) => {

    useEffect(() => {
        getBioNotes();
    },[]);

    const renderNotes = () => (
        bionotes.map(note => (
            <BioNoteCard key={uuid()} name={note.bioName} />
        ))
    )

    return (
        <>
            <h1>Your Bio-Notes</h1>
            <div>
                {renderNotes()}
            </div>
            <div>
                <button>
                    <Link to='newbionote'>Create New Bionote</Link>
                </button>
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        bionotes: state.bionotes.bionotes,
    }
}


export default connect(mapStateToProps, { getBioNotes })(CreateBioNote);
