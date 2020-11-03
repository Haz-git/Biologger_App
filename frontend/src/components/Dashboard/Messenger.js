import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import io from 'socket.io-client';
import restoreChats from '../../redux/chatMessaging/chatActions';
import ChatCard from './ChatCard.js';

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

    handleSearchChange = e => {
        this.setState({
            chatMessage: e.target.value
        })
    }

    renderCards = () => 
        this.props.chat.data.data.chats.map((chat) => (
            <ChatCard key={chat.id} {...chat} user={chat.sender}/>
        ));

    /*

    You stopped at 18:44 of the video:
    https://www.youtube.com/watch?v=wx4EnW4ZlmE&list=PL9a7QRYt5fqlDRSRZCtqhVCg_r5U9idbF&index=2
    
    Your refresh problem has come back to bite you in the ass. It appears that he has to refresh the page to load the new chat message, and will use redux to solve that. However, when you refresh the page, your entire messenger component crashes. I think you should study his code.

    I feel as though you should take a pause here to try to fix your broken messenger problem. For now, all I can think of is two options:

    1. Find out something about redux-persist and hydrating serialized stores... I think you've already got that set up..

    2. Set up a new route that dispatches whatever the state needs per refresh. I don't think this will be hard to implement, but is this efficient?? I heard AirBnb or something was using a technique like this.

    */
    

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
                        <div>
                           {this.props.chat && (
                               <div>{this.renderCards()}</div>
                           )}
                        </div>
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
