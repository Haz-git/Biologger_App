import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { editStrainName } from '../../../redux/userLacZ/LacZActions'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl'

const EditModal = ({ editStrainName,strainId, renderProp, strainName, renderCallBack }) => {

    const [ show, setShow ] = useState(false);
    const [ newStrainName, setNewStrainName] = useState('');

    useEffect(() => {
        if (renderProp) {
            setShow(renderProp);
        }
    },[renderProp])

    const handleClose = () => {
        renderCallBack(false);
        setShow(false);
    }
    const handleSaveChanges = () => {
        editStrainName(newStrainName, strainId);
        renderCallBack(false);
        setShow(false);
    }

    const handleFieldChange = e => {
        e.preventDefault();
        setNewStrainName(e.target.value);
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
            >
                <Modal.Header closeButton>
                    <Modal.Title>Change Your Strain '{strainName}'</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text>New Strain Name</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                        placeholder="BW25311.."
                        aria-label="Input your new strain name."
                        onChange={handleFieldChange}
                        />
                    </ InputGroup>
                </Modal.Body>
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

export default connect(null, { editStrainName })(EditModal);
