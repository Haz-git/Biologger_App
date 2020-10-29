import React from 'react';
import {
    RichUtils,
    KeyBindingUtil,
    EditorState,
} from 'draft-js';

//Creating Link Entity:

export const linkStrategy = (contentBlock, callback, contentState) => {
    contentBlock.findEntityRanges(
        character => {
            const entityKey = character.getEntity();
            return (
                entityKey !== null && contentState.getEntity(entityKey).getType() === 'LINK'
            );
        },
        callback
    );
}

//Link Component:

export const Link = props => {
    const { contentState, entityKey } = props;
    const { url } = contentState.getEntity(entityKey).getData();

    return (
        <a
            className='link'
            href={url}
            rel='noopener noreferrer'
            target='_blank'
            aria-label={url}
        >{props.children}</a>
    );
}

//Creating Link Plugin KeyBinding:

const addLinkPlugin = {
    keyBindingFn(event, { getEditorState }) {
        const editorState = getEditorState()
        const selection = editorState.getSelection();
        if (selection.isCollapsed()) {
            return;
        } 

        if (KeyBindingUtil.hasCommandModifier(event) && event.which === 75) {
            return 'add-link'
        }
    }
}