import React from 'react';
import { connect } from 'react-redux';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Label, ResponsiveContainer } from 'recharts';
import { StyledMainHeader } from './Collection';

//Styles:

import styled from 'styled-components';

const ChartMainContainer = styled.div`
    text-align: center;
`

const ChartContainer = styled.div`
    height: 500px;
    width: 100%;
`
const ResContainer = styled.div`
    width: 100%;
    height: 500px;
    padding: 10px 10px;
    margin-top: 20px;
    margin-bottom: 20px;
`

const CollectionCharts = ({ ownProtocolId, laczAssayProtocols }) => {

    const ownProtocol = laczAssayProtocols.find(item => item.protocolId === ownProtocolId);

    let parsedData;

    if(ownProtocol.collectionStrains) {
        parsedData = [...ownProtocol.collectionStrains];
    }


    if (parsedData !== undefined) {
        
        let startTime;

        for (let i = 0; i < parsedData.length; i++) {

            startTime = parsedData[i].startTime.split(':').map(x => parseInt(x));

            if (parsedData[i].collectionData) {

                for (let j = 0; j < parsedData[i].collectionData.length; j++) {
                    let timeSplit = parsedData[i].collectionData[j].time.split(':').map(x => parseInt(x));
                    let minuteDifference = ((timeSplit[0] - startTime[0]) * 60) + timeSplit[1];
                    parsedData[i].collectionData[j]['timeMinutes'] = minuteDifference.toString();
                    
                }

            }
        }
    }



    const renderCharts = () => {
        if (parsedData) {
            return (
                parsedData.map(item => (
                    <>
                        <ResContainer>
                            <h3>{item.strainName}</h3>
                            <ResponsiveContainer aspect={1.8}>
                                <LineChart width={550} height={400} data={item.collectionData} margin={{ top: 10, right: 20, left: 20, bottom: 40 }}>
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
                <StyledMainHeader>
                    Your Charts
                </StyledMainHeader>
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

export default connect(mapStateToProps)(CollectionCharts);
