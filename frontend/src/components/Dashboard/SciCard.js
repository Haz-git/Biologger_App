import React from 'react';
import styled from 'styled-components';

//Styles:

const SciCardMainContainer = styled.div`
    background-color: lightgoldenrodyellow;
    border: 1px solid black;
    padding: 10px 10px;
`

const StyledImage = styled.img`
    display: block;
    margin: auto;
    max-width: 100%;
    max-height: 500px;
    object-fit: cover;
    border-radius: 8px;
    text-align: center;
`


//Render:

const SciCard = ({
    source,
    author,
    title,
    description,
    url,
    img,
    pubTime
}) => {

    const renderAuthor = () => {
        if (author) {
            return <h4>By: {author}</h4>
        } else {
            return null;
        }
    }

    return (
        <>
            <SciCardMainContainer>
                <div>
                    <h2>{title}</h2>
                    {renderAuthor()}
                    <p>Published On: {pubTime}</p>
                    <div>
                        <StyledImage src={img} alt='Img'></StyledImage>
                    </div>
                </div>
                <div>
                    <p>{description}</p>
                </div>
                <div>
                    <a href={url}>Read Full Article</a>
                </div>
            </SciCardMainContainer>
        </>
    )
}

export default SciCard;