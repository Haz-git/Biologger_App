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
}
