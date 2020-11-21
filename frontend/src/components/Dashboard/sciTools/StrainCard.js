import React from 'react';


const StrainCard = ({name, collection, lacZ}) => {

    const renderCard = () => {
        if (collection && lacZ) {
            return (
                <div>
                    <h1>{name}</h1>
                    <div>
                        <p>You have collection and lacZ results</p>
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    <h1>{name}</h1>
                    <div>
                        <p>Add new collection and lacZ results</p>
                    </div>
                </div>
            )
        }
    }

    return (
        <div>
            {renderCard()}
        </div>
    )
}

export default StrainCard;
