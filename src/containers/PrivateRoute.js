import React from "react";
import { connect } from 'react-redux';
import { Route, Redirect } from "react-router-dom";

import { getUserInfo } from '../actions/UserAction';
import { deleteBookmark } from '../actions/BookmarkAction';

const PrivateRoute = ({ component: Component, ...rest }) => {
	const { isLogged } = rest;
	console.log(isLogged)
	return (
	    <Route
	      	render={props =>
	        	isLogged
		        	? <Component {...rest} {...props} />
		        	: <Redirect
		            		to={{
		              			pathname: "/login"
		            		}}
		          		/>
	      	}
	    />
  	);
}

const mapStateToProps = store => {
    return {
        user: store.user,
        bookmarks: store.bookmarks,
        isLogged: store.login.isLogged
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getUserInfo: () => dispatch(getUserInfo()),
        deleteBookmark: (id) => dispatch(deleteBookmark(id))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PrivateRoute);
