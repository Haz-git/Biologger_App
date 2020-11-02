import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import io from 'socket.io-client';
import restoreChats from '../../redux/chatMessaging/chatActions';

class Messenger extends Component {
    state = {
        chatMessage: "",
    }

    componentDidMount() {
        let server = 'http://localhost:8080';
        //We probably need to establish a custom server route for this.

        //Gather all stored chat messages:
        this.props.restoreChats();

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
                        <div>
                            This should be where the chat messages go...
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
        user: state.auth.userLogIn.data
    }
}

export default connect(mapStateToProps, { restoreChats })(Messenger);
