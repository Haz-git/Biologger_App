import React, { useState, useEffect } from 'react';
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
        let collectionInputs = [...collectionValue]

        if (collectionInputs.length > 0) {
            for (let i = 0; i < collectionInputs.length; i++) {
                if (collectionInputs[i].collectionNum === number) {
                    collectionInputs[i][name] = value;
                    console.log(collectionInputs);
                    setCollectionValue(collectionInputs);
                }

                i++;
            }

            console.log(collectionValue);

        } else {

            if (name === 'time') {
                let inputObjectTime = {
                    collectionNum: number,
                    time: value,
                    value: '',
                }

                collectionInputs.push(inputObjectTime);
                setCollectionValue(collectionInputs);
                console.log(collectionValue);
            }

            if(name === 'odValue') {
                let inputObjectOD = {
                    collectionNum: number,
                    time: '',
                    value: value,
                }

                collectionInputs.push(inputObjectOD);
                console.log(collectionInputs);
                setCollectionValue(collectionInputs);
                console.log(collectionValue);
            }

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


    return (
        <>
            <CardMainContainer>
                <Card>
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Subtitle className='mb-2 text-muted'>Enter values for the {pointNum} collection points.</Card.Subtitle>
                        <SpacerButton>
                            <DividerButton>
                                <Button variant="danger" size='sm'>Delete</Button>
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

export default CollectionStrainCard;
