import React from 'react';
import ReactQuill from 'react-quill';
import styled from 'styled-components';

//Styles:

const MainQuillContainer = styled.div`
    width: 100%;
    height: 800px;
    overflow-y: scroll;
`

const modules = {
    toolbar: [
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        ['blockquote', 'code-block'],
        [{ 'header': 1 }, { 'header': 2 }],               // custom button values
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
        [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
        [{ 'direction': 'rtl' }],                         // text direction
        [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
        [{ 'font': [] }],
        [{ 'align': [] }],
        ['clean']                                         // remove formatting button
    ]
}

const formats = [
    'font',
    'size',
    'bold', 'italic', 'underline',
    'list', 'bullet',
    'align',
    'color', 'background'
];

const NewBioNote = () => {

    const handleOnChange = (content, delta, source, editor) => {
        console.log(editor.getHTML());
    }

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
                    <ReactQuill 
                        theme='snow'
                        modules={modules}
                        formats={formats}
                        onChange={handleOnChange}
                    />
                </div>
            </form>
        </>
    )
}

export default NewBioNote;
