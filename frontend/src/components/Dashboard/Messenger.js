import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import io from 'socket.io-client';
import { restoreChats, updateStateAfterNewMessage } from '../../redux/chatMessaging/chatActions';
import ChatCard from './ChatCard.js';
import styled from 'styled-components';
import { v4 as uuid } from 'uuid';

//Styles:

const ChatContainer = styled.div`
    height: 500px;
    overflow-y: scroll;
`


//Render:

class Messenger extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.props.restoreChats();
    }

    state = {
        chatMessage: "",
    }




    componentDidMount() {
        let server = 'http://localhost:8080';
        //We probably need to establish a custom server route for this.

        // // //Gather all stored chat messages:

        //Connecting Socket to Server:
        this.socket = io(server);
        this.socket.on('Output Chat Message', msg => {
            //We need to create another action creator to dispatch an 'updated state' when receiving new messages from backend:
            console.log(msg);
            this.props.updateStateAfterNewMessage(msg);
        })
    }
    /*
    So it seems that the cause of the error was that the reducer wasn't appending correctly! I knew it! When we tried to append to the current State of chat in the reducer, we can't do that because the reducer can't reference the own state...dumb.

    And so we tried to do it in the action payload using 'getState()'. This worked, but we ended up appending chatLogs twice and so our components couldn't render properly. 

    Using the spread operator, I created a new object and fixed the appending...But now with state change we STILL don't get re-rendering of the chat messages...

    */

    componentDidUpdate = () => {
        this.messageEnd.scrollIntoView({behavior: 'smooth'});
    }

    handleSearchChange = e => {
        this.setState({
            chatMessage: e.target.value
        })
    }

    renderCards = () => (
        this.props.chat.data.data.chats.map((chat) => (
            <ChatCard key={uuid()} {...chat} user={chat.sender}/>
        ))
    )
    

    handleChatSubmit = e => {
        e.preventDefault();

        //We need to put chat message into server:
        let chatMessage = this.state.chatMessage;

        let userId = this.props.user._id;
        let userName = this.props.user.userName;
        let currentTime = moment();
        let type = 'Text';

        this.socket.emit("Input Chat Message", {
            chatMessage,
            userId,
            userName,
            currentTime,
            type,
        });

        //Reset State:

        this.setState({
            chatMessage: ''
        });
    }

    render() {
        return(
            <>
                <h1>Messenger App</h1>
                <div>
                    <div>
                        <ChatContainer>
                           {this.props.chat && (
                               <div>{this.renderCards()}</div>
                           )}
                           <div
                                ref={el => {this.messageEnd = el;}}
                            />
                        </ChatContainer>
                    </div>
                    <form onSubmit={this.handleChatSubmit}>
                        <input
                            id='message'
                            placeholder='Start Chatting!'
                            type='text'
                            value={this.state.chatMessage}onChange={this.handleSearchChange}
                        />
                        <div>
                            <button type='submit'>Submit</button>
                        </div>
                    </form>
                </div>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.auth.userLogIn.data,
        chat: state.chat.chatLogs,
    }
}

const mapDispatchToProps = () => {
    return {
        restoreChats,
        updateStateAfterNewMessage,
    }
}

export default connect(mapStateToProps, mapDispatchToProps())(Messenger);
