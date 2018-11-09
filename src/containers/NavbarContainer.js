import React from 'react';
import { connect } from 'react-redux';
import Navbar from '../components/Navbar';
import { handleLogout } from '../actions/LoginAction';

const NavbarContainer = (props) => 
    <Navbar {...props} />

const mapStateToProps = store => {
    return {
        login: store.login
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleLogout: (e) => dispatch(handleLogout(e))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavbarContainer);