import React from "react";
import { Route, Redirect } from "react-router-dom";
import auth from "../utils/auth";

const PrivateRoute = ({ component: Component, ...rest }) => {
	return (
	    <Route
	      	render={props =>
	        	auth.isAuthenticated()
		        	? <Component {...props} {...rest} />
		        	: <Redirect
		            		to={{
		              			pathname: "/login"
		            		}}
		          		/>
	      	}
	    />
  	);
}

export default PrivateRoute;
