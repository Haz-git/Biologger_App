import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import LacZCards from './LacZCards';
import styled from 'styled-components';

//Styles:
import { MainHeader, SecondaryHeader } from '../../signupPage/SignUpForm';

const LacZMainContainer = styled.div`
    padding: 20px 20px;
    text-align: center;
`

//Render:

const LacZ = ({ laczAssayProtocols, match:{params:{id}} }) => {

    const ownProtocol = laczAssayProtocols.find(x => x.protocolId === id);

    console.log(ownProtocol)

    const renderLacZCards = () => {
        if (ownProtocol.collectionStrains !== null && ownProtocol.collectionStrains !== undefined) {
            return ownProtocol.collectionStrains.map(strain => (
                <LacZCards
                    dilutionFactor={5}
                    volume={0.05}
                    ownProtocolId={ownProtocol.protocolId}
                    ownStrainId={strain.strainId}
                    ownStrainName={strain.strainName}
                    collectionData={strain.collectionData}
                />
            ))
        } else {
            return (
                <SecondaryHeader>
                    Sorry! You haven't collected any strains yet. Try to do that before running the LacZ assay. It's the first step, after all.
                </SecondaryHeader>
            )
        }
    }


    return (
        <LacZMainContainer>
            <div>
                <MainHeader>LacZ Data Collection</MainHeader>
            </div>
            <div>
                {renderLacZCards()}
            </div>
        </LacZMainContainer>
    )
}

const mapStateToProps = state => {
    return {
        laczAssayProtocols: state.laczAssayProtocols.laczProtocol,
    }
}

export default connect(mapStateToProps)(LacZ);
