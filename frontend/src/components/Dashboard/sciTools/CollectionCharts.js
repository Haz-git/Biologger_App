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
    console.log(ownProtocol.collectionStrains[0].collectionData);

    let parsedData;
    
    if (ownProtocol.collectionStrains.collectionData) {
        parsedData = [...ownProtocol.collectionStrains.collectionData]
    }

    console.log(parsedData);

    const renderCharts = () => {
        if (ownProtocol.collectionStrains) {
            return (
                ownProtocol.collectionStrains.map(item => (
                    <>
                        <h3>{item.strainName}</h3>
                        <LineChart width={600} height={400} data={item.collectionData} margin={{ top: 10, right: 30, left: 30, bottom: 40 }}>
                            <Line type="monotone" dataKey="odValue" stroke="#8884d8" />
                            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                            <XAxis dataKey="time">
                                <Label value='Time Collected' position='bottom' style={{ textAnchor: 'middle' }} />
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
