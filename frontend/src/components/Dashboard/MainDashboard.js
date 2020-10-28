import React, { Component } from 'react';
import { getJWT } from '../../utils/jwthelper';

class MainDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        const userDetails = getJWT();

        const { firstName, lastName, userName, email } = userDetails.data;

        this.setState({
            firstName,
            lastName,
            userName,
            email,
        });

        console.log(getJWT());
    }

    render() {

        const { firstName, lastName, userName, email } = this.state;

        return (
            <div>
                <h1>Welcome back {firstName} </h1>
                <h2>You are currently signed in under {email}</h2>
            </div>
        )
    }
}

// const mapStateToProps = state => {
//     return {
//         user: state.auth.userLogIn.data,
//     }
// }


// export default connect(mapStateToProps)(MainDashboard);

export default MainDashboard;