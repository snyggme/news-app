import { 
	POST_LOGIN_REQUEST,
	POST_LOGIN_SUCCESS,
	POST_LOGIN_FAIL
} from '../actions/LoginAction';
import auth from '../utils/auth';

const initialState = {
	id: null,
	error: false,
	errorMessage: '',
	isChecking: false
};

export const loginReducer = (state = initialState, action) => {
	switch (action.type) {
		case POST_LOGIN_REQUEST:
			return {
				...state,
				isChecking: true
			}
		case POST_LOGIN_SUCCESS:
			auth.login();
			return {
				...state,
				id: action.payload,
				isChecking: false
			}
		case POST_LOGIN_FAIL:
			return {
				...state,
				error: true,
				errorMessage: action.payload,
				isChecking: false
			}
 		default:
			return state;
	}
}