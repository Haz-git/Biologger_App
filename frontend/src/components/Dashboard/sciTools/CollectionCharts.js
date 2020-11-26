import React from 'react';
import { connect } from 'react-redux';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Label, ResponsiveContainer } from 'recharts';
import { StyledMainHeader } from './Collection';

//Styles:

import styled from 'styled-components';

const ChartMainContainer = styled.div`
    display: block;
    text-align: center;
`

const ChartContainer = styled.div`

`

const CollectionCharts = ({ ownProtocolId, laczAssayProtocols }) => {

    const ownProtocol = laczAssayProtocols.find(item => item.protocolId === ownProtocolId);
    console.log(ownProtocol.collectionStrains);

    let parsedData = [...ownProtocol.collectionStrains];

    console.log(parsedData);

    if (parsedData !== undefined) {
        
        let startTime;

        for (let i = 0; i < parsedData.length; i++) {

            if (parsedData[i].collectionData) {

                for (let j = 0; j < parsedData[i].collectionData.length; j++) {
                    if (j === 0) {
                        parsedData[i].collectionData[j]['timeMinutes'] = '0';
                        startTime = parsedData[i].collectionData[j].time.split(':').map(x => parseInt(x));
                    } else {
                        let timeSplit = parsedData[i].collectionData[j].time.split(':').map(x => parseInt(x));
                        let minuteDifference = ((timeSplit[0] - startTime[0]) * 60) + timeSplit[1];
                        parsedData[i].collectionData[j]['timeMinutes'] = minuteDifference.toString();
                    }
                }

            }
        }
    }

    console.log(parsedData);

    // if (parsedData !== undefined) {
    //     let startTime;
    //     for (let i = 0; i < parsedData.length; i++) {

    //         if (i === 0) {
    //             parsedData[i]['timeMinutes'] = '0';
    //             startTime = parsedData[i].time.split(':').map(x => parseInt(x));
    //         } else {
    //             let timeSplit = parsedData[i].time.split(':').map(x => parseInt(x));
    //             console.log(timeSplit);
    //             console.log(startTime);
    //             let minuteDifference = ((timeSplit[0] - startTime[0]) * 60) + timeSplit[1];
    //             parsedData[i]['timeMinutes'] = minuteDifference.toString();
    //         }

    //     }
    // }

    // console.log(parsedData);
    // ownProtocol.collectionStrains['collectionData'] = parsedData;
    // console.log(ownProtocol.collectionStrains)

    const renderCharts = () => {
        if (parsedData) {
            return (
                parsedData.map(item => (
                    <>
                        <h3>{item.strainName}</h3>
                        <LineChart width={600} height={400} data={item.collectionData} margin={{ top: 10, right: 30, left: 30, bottom: 40 }}>
                            <Line type="monotone" dataKey="odValue" stroke="#8884d8" />
                            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                            <XAxis dataKey="timeMinutes">
                                <Label value='Minutes' position='bottom' style={{ textAnchor: 'middle' }} />
                            </XAxis>
                            <YAxis dataKey='odValue'>
                                <Label value='OD600 Value' position='left' angle='-90' style={{ textAnchor: 'middle' }} />
                            </YAxis>
                            <Tooltip />
                            <Legend verticalAlign="top" height={50}/>
                        </LineChart>
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
                <StyledMainHeader>
                    Your Charts
                </StyledMainHeader>
                <ChartContainer>
                    {renderCharts()}
                </ChartContainer>
            </ChartMainContainer>
        </>
    )
}

const mapStateToProps = state => {
    return {
        laczAssayProtocols: state.laczAssayProtocols.laczProtocol
    }
}

export default connect(mapStateToProps)(CollectionCharts);
