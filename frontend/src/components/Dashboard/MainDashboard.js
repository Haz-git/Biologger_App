import React from 'react';
import { connect } from 'react-redux';

const MainDashboard = ({ user }) => {
    return (
        <div>
            <h1>Welcome back, {user.firstName}!</h1>
            <h2>You are currently signed in under {user.email}</h2>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        user: state.auth.userLogIn.data,
    }
}


export default connect(mapStateToProps)(MainDashboard);