import React, { Component } from 'react';
import { EditorState, RichUtils } from 'draft-js';
import Editor from 'draft-js-plugins-editor';
import styled from 'styled-components';
import createHighlightPlugin from './bionotePlugin';

//Styles:
const MainContainer = styled.div`
    border: 1px solid gray;
`
const OptionsContainer = styled.div`
    padding: 10px 10px;
`
const EditorContainer = styled.div`
    padding: 10px 10px;
    border: 1px solid black;
`

//Generating highlight Plugin:
const highlightPlugin = createHighlightPlugin();


//Render:

class CreateBioNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty(),
        }

        this.plugins = [
            highlightPlugin,
        ];
    }

    onChange = (editorState) => {
        this.setState({
            editorState
        });
    }

    handleKeyCommand = (command) => {
        const newState = RichUtils.handleKeyCommand(this.state.editorState, command);

        if (newState) {
            this.onChange(newState);
            return 'handled';
        }

        return 'not-handled';
    }

    onUnderlineClick = () => {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'UNDERLINE'));
    }

    onBoldClick = () => {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
    }
    
    onItalicClick = () => {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'ITALIC'));
    }

    render() {
        return (
            <MainContainer>
                <OptionsContainer>
                    <button onClick={this.onUnderlineClick}>U</button>
                    <button onClick={this.onBoldClick}><b>B</b></button>
                    <button onClick={this.onItalicClick}><em>I</em></button>
                </OptionsContainer>
                <EditorContainer>
                    <Editor 
                        editorState={this.state.editorState}
                        handleKeyCommand={this.handleKeyCommand}
                        onChange={this.onChange} 
                    />
                </EditorContainer>
            </MainContainer>
        )
    }
}

export default CreateBioNote;
