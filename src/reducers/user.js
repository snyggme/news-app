import { 
	POST_LOGIN_REQUEST,
	POST_LOGIN_SUCCESS,
	POST_LOGIN_FAIL
} from '../actions/UserAction';

const initialState = {
	data: [],
	error: false,
	errorMessage: '',
	id: null,
	isChecking: false
};

export const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case POST_LOGIN_REQUEST:
			return {
				...state,
				isChecking: true
			}
		case POST_LOGIN_SUCCESS:
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