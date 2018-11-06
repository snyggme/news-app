import { httpPostLogin } from '../utils/network';

export const POST_LOGIN_REQUEST = 'POST_LOGIN_REQUEST';
export const POST_LOGIN_SUCCESS = 'POST_LOGIN_SUCCESS';
export const POST_LOGIN_FAIL = 'POST_LOGIN_FAIL';

export const handleLogin = (e) => {
	return dispatch => {
		e.preventDefault();

		const email = e.target.email.value;
		const password = e.target.password.value;

		dispatch({
			type: POST_LOGIN_REQUEST
		});

		httpPostLogin(dispatch, { email, password });
	}
}