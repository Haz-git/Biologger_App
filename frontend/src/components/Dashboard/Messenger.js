import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import io from 'socket.io-client';
import restoreChats from '../../redux/chatMessaging/chatActions';
import ChatCard from './ChatCard.js';
import styled from 'styled-components';

//Styles:

const ChatContainer = styled.div`
    height: 500px;
    overflow-y: scroll;
`


//Render:

class Messenger extends Component {
    constructor(props) {
        super(props);
        this.props.dispatch(restoreChats())
    }
    state = {
        chatMessage: "",
    }


    componentDidMount() {
        let server = 'http://localhost:8080';
        //We probably need to establish a custom server route for this.

        // // //Gather all stored chat messages:
        // this.props.dispatch(restoreChats());

        //Connecting Socket to Server:
        this.socket = io(server);
        this.socket.on('Output Chat Message', msg => {
            console.log(msg);
        })
    }

    componentDidUpdate() {
        this.messageEnd.scrollIntoView({behavior: 'smooth'});
    }

    handleSearchChange = e => {
        this.setState({
            chatMessage: e.target.value
        })
    }

    renderCards = () => 
        this.props.chat.data.data.chats.map((chat) => (
            <ChatCard key={chat.id} {...chat} user={chat.sender}/>
        ));
    

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

        console.log(this.props.chat);
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
    //chatLogs.data.data.chats
}

export default connect(mapStateToProps)(Messenger);
