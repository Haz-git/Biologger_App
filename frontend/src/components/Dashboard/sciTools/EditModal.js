import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const EditModal = ({ renderProp, strainName, renderCallBack }) => {

    const [ show, setShow ] = useState(false);

    useEffect(() => {
        if (renderProp) {
            setShow(renderProp);
        }

        console.log('renderProps receieved');
    },[renderProp])

    const handleClose = () => {
        renderCallBack(false);
        setShow(false);
    }
    const handleSaveChanges = () => {
        console.log('stuff has been saved');
    }

    return (
        <>
            <Modal
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                animation={true}
                show={show}
                onHide={handleClose}
                backdrop='static'
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Change Your Strain Name</Modal.Title>
                </Modal.Header>
                <Modal.Body>Change your existing strain name: '{strainName}'</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSaveChanges}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default EditModal;
