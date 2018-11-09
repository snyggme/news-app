import { 
	POST_LOGIN_REQUEST,
	POST_LOGIN_SUCCESS,
	POST_LOGIN_FAIL,
	LOGOUT
} from '../actions/LoginAction';
import auth from '../utils/auth';

const initialState = {
	isLogged: false,
	error: false,
	errorMessage: '',
	isChecking: false
};

export const loginReducer = (state = initialState, action) => {
	switch (action.type) {
		case POST_LOGIN_REQUEST:
			return {
				...state,
				error: false,
				isChecking: true
			}
		case POST_LOGIN_SUCCESS:
			auth.login(action.payload);

			return {
				...state,
				isLogged: true,
				error: false,
				isChecking: false
			}
		case POST_LOGIN_FAIL:
			return {
				...state,
				error: true,
				errorMessage: action.payload,
				isChecking: false
			}
		case LOGOUT:
			auth.logout();

			return {
				...state,
				isLogged: false,
				error: false,
				isChecking: false
			}
 		default:
			return state;
	}
}