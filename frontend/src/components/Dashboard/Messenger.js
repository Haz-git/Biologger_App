import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import io from 'socket.io-client';
import { restoreChats, updateStateAfterNewMessage } from '../../redux/chatMessaging/chatActions';
import ChatCard from './ChatCard.js';
import styled from 'styled-components';

import 'normalize.css';

//Styles:

const MainMessengerContainer = styled.div`
    margin-left: 0;
    box-sizing: border-box;
    background-color: lightblue;
    height: 100vh;

`
const MainHeaderText = styled.h1`
    margin: 0;
    text-align: center;
    background-color: red;
    font-family: Roboto, sans-serif;

`

const ChatContainer = styled.div`
    overflow-y: scroll;
`



//Render:

class Messenger extends Component {

    state = {
        chatMessage: "",
    }

    componentDidMount() {
        let server = 'http://localhost:8080';

        //Gather all stored chat messages:
        this.props.restoreChats();

        //Connecting Socket to Server:
        this.socket = io(server);
        this.socket.on('Output Chat Message', msg => {
            //We need to create another action creator to dispatch an 'updated state' when receiving new messages from backend:
            console.log(msg);
            this.props.updateStateAfterNewMessage(msg);
        })
    }

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
            <ChatCard key={chat._id} {...chat}/>
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
                <MainMessengerContainer>
                    <MainHeaderText>Real-Time Messenger</MainHeaderText>
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
                </MainMessengerContainer>
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
