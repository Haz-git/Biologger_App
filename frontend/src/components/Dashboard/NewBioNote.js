import React, { useState } from 'react';
import styled from 'styled-components';
import QuillEditor from '../../editor/QuillEditor';

//Styles:

const MainEditorContainer = styled.div`
    padding: 50px 50px;
`


const NewBioNote = () => {

    //Create two states for values and files!

    const [content, setContent] = useState('');
    const [files, setFiles] = useState([]);

    const onEditorChange = (value) => {
        console.log(value);
        setContent(value);
    }

    const onFileChange = (files) => {
        console.log(files);
        setFiles(files);
    }

    return (
        <>
            <MainEditorContainer>
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
            </MainEditorContainer>
        </>
    )
}

/*
The main goal here is to:

1. Learn how to save documents into mongoDB into each individual user.
**WE ARE HERE**

We've now learned how to save the user's writing temporarily in the content state. We still need to create routing to our backend that will push this document into the user's stuff. 

https://www.youtube.com/watch?v=AgreDlNaUn4 @ timestamp 38:21 --> He's setting up the model necessary for creating the blog...

2. Learn how to load documents into the loading component "createbionote" --> perhaps a simple listing pattern?

3. Learn how to grab HTML info from mongodb and re-render HTML document upon clicking it.. 
4. 





*/

export default NewBioNote;
