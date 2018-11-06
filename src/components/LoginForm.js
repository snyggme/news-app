import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import auth from '../utils/auth';

class LoginForm extends Component {
	render() {
		const { isChecking, error, errorMessage, id } = this.props.login;

		if (auth.isAuthenticated() && id !== null) {
			return <Redirect
	            		to={{
	              			pathname: "/profile"
	            		}}
	          		/>
		}

		return (
		    <div>
		    	{ isChecking
		    		? <div className='loading' />
		    		: error
		    			? <div>{errorMessage}</div>
		    			: (
		    				<form id='login-form' onSubmit={this.props.handleLogin}>
						    	<input required type="email" id="email" placeholder="email" />
							    <input required type="password" id="password" placeholder="password" />
							    <button type="submit" id="submit-btn">Submit</button>
					    	</form>
		    			)
		    	}
		    </div>
	  	);
	}
}

export default LoginForm;