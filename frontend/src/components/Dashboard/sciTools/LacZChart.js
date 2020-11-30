import React from 'react';
import { linearRegression, linearRegressionLine, rSquared } from 'simple-statistics';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Label, ResponsiveContainer } from 'recharts';
import { StyledMainHeader } from './Collection';
import Badge from 'react-bootstrap/Badge';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';

const LacZChart = ({
    ownStrain,
    minute,
    dilutionFactor,
    volume,
}) => {

    /*
        0: {
            collectionNum: 1,
            od600Value: .231,
            bgalValue: 324234,

        }

    */

    let bgalParsedData;
    let bgalConfiguredData = [];

    if (ownStrain.lacZData !== null && ownStrain.lacZData !== undefined) {
        bgalParsedData = {...ownStrain};
    }

    if (bgalParsedData !== null && bgalParsedData !== undefined) {
        for (let j = 0; j < bgalParsedData.collectionData.length; j++) {
            bgalConfiguredData.push({
                collectionNum: bgalParsedData.collectionData[j].collectionNum,
                od600value: bgalParsedData.collectionData[j].odValue,
            })
        }

        for (let k = 0; k < bgalParsedData.lacZData.length; k++) {
            const OD420 = bgalParsedData.lacZData[k].odValue420;
            const OD550 = bgalParsedData.lacZData[k].odValue550;

            const bgalUnit = ((1000 * (OD420 - 1.75 * OD550) * dilutionFactor)/(minute * volume));

            bgalConfiguredData[k]['bgalUnit'] = bgalUnit;
        }
    }

    console.log(bgalConfiguredData);


    return (
        <>
            <ResponsiveContainer aspect={2.2}>
                <LineChart width={400} height={350} data={bgalConfiguredData} margin={{ top: 0, right: 20, left: 30, bottom: 40 }}>
                    <Line type="monotone" dataKey="bgalUnit" stroke="#2d2d7d" strokeWidth={2.5} />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="od600Value">
                        <Label value='OD-600 Value' position='bottom' style={{ textAnchor: 'middle' }} />
                    </XAxis>
                    <YAxis dataKey='bgalUnit'>
                        <Label value='B-Galactosidase Units' position='left' angle={-90} style={{ textAnchor: 'middle' }} />
                    </YAxis>
                    <Tooltip />
                    <Legend verticalAlign="top" height={40}/>
                </LineChart>
            </ResponsiveContainer>
        </>
    )
}

export default LacZChart;
