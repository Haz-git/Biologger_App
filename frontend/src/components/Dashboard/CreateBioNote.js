import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { getBioNotes } from '../../redux/userBioNote/bionoteActions';
import styled from 'styled-components';

//Components:
import BioNoteCard from './BioNoteCard';

//Styles:
const StyledHeader = styled.h1`
    margin: 0;
    text-align: center;
`

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
            <StyledHeader>Your Bio-Notes</StyledHeader>
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
