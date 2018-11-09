import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import ErrorMessage from './ErrorMessage';
import auth from '../utils/auth';

class LoginForm extends Component {
	render() {
		const { isChecking, error, errorMessage, isLogged } = this.props.login;

		if (isLogged) {
			return <Redirect
	            		to={{
	              			pathname: "/profile"
	            		}}
	          		/>
		}

		return (
		    <div>
		    	{ error && 
		    		<ErrorMessage message={errorMessage} />
		    	}
		    	{ isChecking
		    		? <div className='loading' />
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