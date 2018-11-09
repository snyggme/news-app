import React from "react";
import { connect } from 'react-redux';
import { Route, Redirect } from "react-router-dom";

import { getUserInfo } from '../actions/UserAction';
import { deleteBookmark } from '../actions/BookmarkAction';
import auth from "../utils/auth";

const PrivateRoute = ({ component: Component, ...rest }) => {
	return (
	    <Route
	      	render={props =>
	        	auth.isAuthenticated()
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
        bookmarks: store.bookmarks
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
