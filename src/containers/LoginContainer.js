import React from 'react';
import { connect } from 'react-redux';
import LoginForm from '../components/LoginForm';
import { handleLogin } from '../actions/LoginAction';

const LoginContainer = (props) =>
    <LoginForm {...props} />

const mapStateToProps = store => {
    return {
        login: store.login
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleLogin: (e) => dispatch(handleLogin(e))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginContainer);

