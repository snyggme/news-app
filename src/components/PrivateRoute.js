import React from "react";
import { Route, Redirect } from "react-router-dom";
import auth from "../utils/auth";

const PrivateRoute = ({ render: Component, ...rest }) => {
	return (
	    <Route
	    	{...rest}
	      	render={props =>
	        	auth.isAuthenticated()
	        	? <Component {...props} />
	        	: <Redirect
	            		to={{
	              			pathname: "/login",
	              			state: { from: props.location }
	            		}}
	          		/>
	      	}
	    />
  	);
}

export default PrivateRoute;
