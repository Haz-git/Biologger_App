import React, { Component } from 'react';
import { getJWT } from '../../utils/jwthelper';
import history from '../../historyObject';
import api from '../../api';

class AuthenticatedComponents extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user: undefined,
        }
    }

    componentDidMount() {
        const jwt = getJWT();

        if(!jwt) {
            history.push('/login');
        }


    }


    render() {
        return (
            <div>Hello World</div>
        )
    }
}