import React from 'react';

const ErrorMessage = (props) => {
	const message = props.message === 'wrong_email_or_password'
		? 'Wrong email or password. Try again.' 
		: props.message === 'user_not_found'
			? 'User not found. Enter correct data.'
			: props.message;

	return (
		<div className='error-message'>
			{message}
		</div>
	)
}


export default ErrorMessage;