import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import styled from 'styled-components';
import QuillEditor from '../../editor/QuillEditor';

//Styles:

const MainQuillContainer = styled.div`
    width: 100%;
    height: 800px;
    overflow-y: scroll;
`


const NewBioNote = () => {

    //Create two states for values and files!
    const onEditorChange = (value) => {
        console.log(value);
    }

    const onFileChange =

    return (
        <>
            <form>
                <div>
                    <label>Name of BioNote:  </label>
                    <input
                        type='text'
                        placeholder='Enter Name..'
                    />
                </div>
                <div>
                    <QuillEditor
                        theme='snow'
                        placeholder='Start Writing Your BioNote...'
                        onEditorChange={onEditorChange}
                        onFileChange={onFileChange}
                    />
                </div>
            </form>
        </>
    )
}

/*
The main goal here is to:

1. Learn how to save documents into mongoDB into each individual user.
2. Learn how to load documents into the loading component "createbionote" --> perhaps a simple listing pattern?

3. Learn how to grab HTML info from mongodb and re-render HTML document upon clicking it.. 
4. 





*/

export default NewBioNote;
