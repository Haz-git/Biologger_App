import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import LacZCards from './LacZCards';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

//Styles:
import { MainHeader, SecondaryHeader } from '../../signupPage/SignUpForm';
import { Button } from 'react-bootstrap';

const LacZMainContainer = styled.div`
    padding: 20px 20px;
    text-align: center;
`

//Render:

const LacZ = ({ laczAssayProtocols, match:{params:{id}} }) => {

    const ownProtocol = laczAssayProtocols.find(x => x.protocolId === id);

    const renderLacZCards = () => {
        if (ownProtocol.collectionStrains !== null && ownProtocol.collectionStrains !== undefined) {
            return ownProtocol.collectionStrains.map(strain => (
                <LacZCards
                    minute={1.333333}
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
                <>
                    <SecondaryHeader>
                        Sorry! You haven't collected any strains yet. Try to do that before running the LacZ assay. It's the first step, after all.
                    </SecondaryHeader>
                    <Link to={`/scitools/lazylacz/collection/${id}`}>
                        <Button variant='primary' size='lg'>Navigate To Collection Area</Button>
                    </Link>
                </>
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
