import React from 'react';
import { connect } from 'react-redux';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Label, ResponsiveContainer } from 'recharts';
import { StyledMainHeader } from './Collection';
import Badge from 'react-bootstrap/Badge';
import { addCollectionChartParsedData } from '../../../redux/userLacZ/LacZActions';

//Statistics:
import { linearRegression, linearRegressionLine, rSquared } from 'simple-statistics';

//Styles:

import styled from 'styled-components';
import { Button } from 'react-bootstrap';

const ChartMainContainer = styled.div`
    text-align: center;
`


const MainHeaderDivider = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const StyledButton = styled(Button)`
    display: flex;
    justify-content: flex-end;
`

const ChartHeader = styled.h3`
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    font-size: 25px;
    font-weight: 900;
    text-decoration: underline;

`

const ResContainer = styled.div`
    width: 100%;
    height: 500px;
    padding: 10px 10px;
    margin-top: 20px;
    margin-bottom: 20px;
    background-color: white;
    border-radius: 5px;
    filter: drop-shadow(0 0 1px black);
`

const StyledBadge = styled(Badge)`
    padding: 6px 6px;
    margin-top: 5px;
    margin-left: 5px;
    margin-right: 5px;
    background-color: #2d2d7d;
` 

//Render:

const CollectionCharts = ({ ownProtocolId, laczAssayProtocols, addCollectionChartParsedData }) => {

    const ownProtocol = laczAssayProtocols.find(item => item.protocolId === ownProtocolId);

    let parsedData;

    if(ownProtocol.collectionStrains) {
        parsedData = [...ownProtocol.collectionStrains];
    }

    //Calculate and create timeMinutes into parsedData object:

    if (parsedData !== undefined) {
        
        let startTime;

        for (let i = 0; i < parsedData.length; i++) {

            startTime = parsedData[i].startTime.split(':').map(x => parseInt(x));

            if (parsedData[i].collectionData) {

                for (let j = 0; j < parsedData[i].collectionData.length; j++) {

                    //Calculating timeMinutes:
                    let timeSplit = parsedData[i].collectionData[j].time.split(':').map(x => parseInt(x));
                    let minuteDifference = ((timeSplit[0] - startTime[0]) * 60) + timeSplit[1];
                    parsedData[i].collectionData[j]['timeMinutes'] = minuteDifference.toString();
                    
                }

            }
        }

        //Using new timeMinutes created in parsedData, create linearRegression and RSQ:
        // if (parsedData.collectionData !== undefined) {
            
        for (let k = 0; k < parsedData.length; k++) {

            let linearRegressionArray = [];
            if (parsedData[k].collectionData !== undefined) {
                for (let y = 0; y < parsedData[k].collectionData.length; y++) {

                    let pairArray = [];
                    pairArray.push(Math.log2(Number(parsedData[k].collectionData[y].timeMinutes)));
                    pairArray.push(Number(parsedData[k].collectionData[y].odValue));

                    console.log(pairArray);

                    linearRegressionArray.push(pairArray);
                }

                parsedData[k]['linearRegressionArray'] = linearRegressionArray;

                const { m } = linearRegression(linearRegressionArray);
                const regressionLine = linearRegressionLine(linearRegression(linearRegressionArray));
                const rSquaredValue = rSquared(linearRegressionArray, regressionLine);


                parsedData[k]['linearRegressionValue'] = m;
                parsedData[k]['doublingTime'] = (m * 100).toFixed(1);
                parsedData[k]['rSquaredValue'] = rSquaredValue.toFixed(3);

            }
        }
    }

    console.log(parsedData);

    //Automatically dispatch parsedData to save item:

    const handleUpdateDatabase = () => {

        let results = [];

        //Implement a check to see if parsedData has the new values:

        if (parsedData) {
            for (let i = 0; i < parsedData.length; i++) {
                if (parsedData[i].doublingTime) {
                    results.push(parsedData[i].doublingTime);
                } 
            }

            if (results.length > 0) {
                addCollectionChartParsedData(ownProtocolId, parsedData);
            } else {
                return alert('Please input your collection data before saving to the database.');
            }

        }

    }






    const renderCharts = () => {
        if (parsedData) {
            return (
                parsedData.map(item => (
                    <>
                        <ResContainer>
                            <ChartHeader>{item.strainName}</ChartHeader>
                            <div>
                                <StyledBadge variant='dark'>
                                    Calculated Doubling Time: {item.doublingTime} minutes
                                </StyledBadge>
                                <StyledBadge variant='dark'>
                                    rSquaredValue: {item.rSquaredValue}
                                </StyledBadge>
                                <StyledBadge variant='dark'>
                                    Starting OD600: {item.startingOD} |||
                                    Starting Time: {item.startTime}
                                </StyledBadge>
                            </div>
                            <ResponsiveContainer aspect={2.1}>
                                <LineChart width={550} height={400} data={item.collectionData} margin={{ top: 0, right: 20, left: 20, bottom: 40 }}>
                                    <Line type="monotone" dataKey="odValue" stroke="#2d2d7d" strokeWidth={2.5} />
                                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                                    <XAxis dataKey="timeMinutes">
                                        <Label value='Minutes' position='bottom' style={{ textAnchor: 'middle' }} />
                                    </XAxis>
                                    <YAxis dataKey='odValue'>
                                        <Label value='OD600 Value' position='left' angle={-90} style={{ textAnchor: 'middle' }} />
                                    </YAxis>
                                    <Tooltip />
                                    <Legend verticalAlign="top" height={50}/>
                                </LineChart>
                            </ResponsiveContainer>
                        </ResContainer>
                    </>
                ))
            )
        } else {
            return (
                <div> Whoops! No strains = no charts <span role='img' aria-label='sweat-emoji'>😅 </span></div>
            )
        }
    }


    return (
        <>
            <ChartMainContainer>
                <MainHeaderDivider>
                    <StyledMainHeader>
                        Your Charts
                        <StyledButton variant="primary" size='sm' onClick={handleUpdateDatabase}>Send Charts To Database</StyledButton>
                    </StyledMainHeader>
                </MainHeaderDivider>
                {renderCharts()}
            </ChartMainContainer>
        </>
    )
}

const mapStateToProps = state => {
    return {
        laczAssayProtocols: state.laczAssayProtocols.laczProtocol
    }
}

export default connect(mapStateToProps, { addCollectionChartParsedData })(CollectionCharts);
