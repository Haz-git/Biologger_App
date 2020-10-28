import React, { Component } from 'react';
import { Editor, EditorState } from 'draft-js';
import styled from 'styled-components';

//Styles:
const MainContainer = styled.div`
    background-color: pink;
    border: 1px solid gray;
`


//Render:

class CreateBioNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty(),
        }
    }

    onChange = (editorState) => {
        this.setState({
            editorState
        });
    }

    render() {
        return (
            <MainContainer>
                <Editor 
                    editorState={this.state.editorState} 
                    onChange={this.onChange} 
                />
            </MainContainer>
        )
    }
}

export default CreateBioNote;
