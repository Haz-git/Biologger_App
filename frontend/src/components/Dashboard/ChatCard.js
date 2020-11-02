import React from 'react'

const ChatCard = (props) => {
    return (
        <div>
            <div>
                <h2>{props.sender.username}</h2>
            </div>
            <div>{props.message}</div>
        </div>
    )
}

export default ChatCard;
