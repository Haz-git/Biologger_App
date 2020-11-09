import React from 'react';

const SciCard = ({
    source,
    author,
    title,
    description,
    url,
    img,
    pubTime
}) => {
    return (
        <>
            <div>
                <div>
                    <h2>{title}</h2>
                    <h3>{author}</h3>
                    <h6>{source}</h6>
                    <p>{pubTime}</p>
                    <div>
                        <img src={img} alt='article thumbnail'></img>
                    </div>
                </div>
                <div>
                    <p>{description}</p>
                </div>
                <div>
                    <a href={url}>Read Article</a>
                </div>
            </div>
        </>
    )
}

export default SciCard;