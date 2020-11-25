import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { deleteStrainFromCollection } from '../../../redux/userLacZ/LacZActions';
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import TimePicker from 'react-time-picker';
import { v4 as uuid } from 'uuid';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';

//Create a card with an input group--might have to add starting OD600 to the collection input card...

//Styles:

const CardMainContainer = styled.div`
margin-top: 10px;
margin-bottom: 10px;
`


const InputDivider = styled.div`
    width: 300px;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    display: block;
    text-align: center;
`

const StyledInputHeader = styled.h4`
    font-family: 'Nunito', sans-serif;
    font-size: 20px;
    font-weight: 600;
`

const StyledLabel = styled.label`
    font-family: 'Nunito', sans-serif;
    font-weight: 100;
    font-size: 17px;
    margin-right: 10px;
`

const TimeInputDivider = styled.div`
    display: flex;
    height: 30px;
    align-items: baseline;
    margin-bottom: 10px;
`

const SpacerButton = styled.div`
    display: flex;
    justify-content: center;
`
const DividerButton = styled.div`
    margin-left: 5px;
    margin-right: 5px;
`
const CollectionStrainCard = ({ name, pointNum, startTime, strainId }) => {

    let [ collectionValue, setCollectionValue ] = useState([]);


    /*
    Object structuring...
    [
        {
            collectionNum: 1,
            time: _____,
            value: -----,
            
        },

        {
            collectionNum: 2,
            time: _____,
            value: ______,

        },
    ]

    */

    const handleOnChange = (object) => {
        const { name, value, number } = object;
        let collectionInputs = [...collectionValue];

        /*
            1. Destructures, name, value, and number out.
            2. Sets a variable to hold state array...
            3. loops through variable array, and finds the object with the correct collection number--
            if it DOESN'T find it, create a new object and insert.
            4. After finding the correct collection number and determining whether to replace a value or--
            create a new object, check the destructured 'name' value.
            5. Depending on the name value, place or replace the value accordingly...

        */

        const targetIndex = collectionInputs.findIndex(input => input.collectionNum === number);

        if (targetIndex === -1) {
            if (name === 'time') {
                let inputObjectTime = {
                    collectionNum: number,
                    time: value,
                    odValue: '',
                }

                collectionInputs.push(inputObjectTime);
                setCollectionValue(collectionInputs);
                console.log(collectionValue);
            }

            if(name === 'odValue') {
                let inputObjectOD = {
                    collectionNum: number,
                    time: '',
                    odValue: value,
                }

                collectionInputs.push(inputObjectOD);
                console.log(collectionInputs);
                setCollectionValue(collectionInputs);
                console.log(collectionValue);
            }
        } else if (targetIndex > -1) {
            collectionInputs[targetIndex][name] = value;
            setCollectionValue(collectionInputs);
            console.log(collectionValue);
        }
    }


    const renderInputGroups = () => {
        const count = parseInt(pointNum) + 1
        let listNum = [];

        for (let i = 1; i < count; i++) {
            listNum.push(i);
        }

        return (
            listNum.map(number => (
                <InputDivider key={number}>
                    <StyledInputHeader>Collection: {number}</StyledInputHeader>
                    <TimeInputDivider>
                        <StyledLabel>Collected at: </StyledLabel>
                        <TimePicker
                            // value={startTime}
                            onChange={(time) => handleOnChange({name: 'time', value: time, number})}
                            disableClock={true}
                            format='h:m a'
                            key={number}
                            name='time'
                        />
                    </TimeInputDivider>
                    <InputGroup size='sm' className='mb-3'>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-sm" >OD600</InputGroup.Text>
                            <FormControl 
                                aria-label="Small" 
                                aria-describedby="inputGroup-sizing-sm" 
                                type='number' 
                                key={number} 
                                name='odValue' 
                                onChange={(e) => handleOnChange({ name:'odValue', value: e.target.value, number })} 
                            />
                        </InputGroup.Prepend>
                    </InputGroup>
                </InputDivider>
            ))
        )
    }

    const handleStrainDelete = () => {
        deleteStrainFromCollection(strainId);
    }


    return (
        <>
            <CardMainContainer>
                <Card>
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Subtitle className='mb-2 text-muted'>Enter values for the {pointNum} collection points.</Card.Subtitle>
                        <SpacerButton>
                            <DividerButton>
                                <Button variant="danger" size='sm'onClick={handleStrainDelete}>Delete</Button>
                            </DividerButton>
                            <DividerButton>
                                <Button variant="success"size='sm'>Save</Button>
                            </DividerButton>
                            <DividerButton>
                                <Dropdown drop='right'>
                                    <Dropdown.Toggle variant="primary" id="dropdown-basic" size='sm'>
                                        Add Collection Data
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        {renderInputGroups()}
                                    </Dropdown.Menu>
                                </Dropdown>
                            </DividerButton>
                        </SpacerButton>
                    </Card.Body>
                </Card>
            </CardMainContainer>
        </>
    )
}

export default connect(null, { deleteStrainFromCollection })(CollectionStrainCard);
