import React from 'react';
import { connect } from 'react-redux';

const Collection = ({ownProtocol}) => {

    //id == protocolId for mongoDB.
    const { protocolName, protocolId, timeStamp } = ownProtocol;

    return (
        <>
            Collection Page for: {protocolName}, created on {timeStamp}...
        </>
    )
}

const mapStateToProps = (state, ownProps) => {
    const ownProtocolId = ownProps.match.params.id;
    const ownProtocol = state.laczAssayProtocols.laczProtocol.find(item => item.protocolId === ownProtocolId);

    return {
        ownProtocol,
    }

}

export default connect(mapStateToProps)(Collection);
