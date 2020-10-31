import React, { Component } from 'react';
import io from 'socket.io-client';

class Messenger extends Component {
    state = {
        chatMessage: "",
    }

    componentDidMount() {
        let server = 'http://localhost:8080/api';
        //We probably need to establish a custom server route for this.

        //Connecting Socket to Server:
        this.socket = io(server);
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
                    <form>
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

export default Messenger;
