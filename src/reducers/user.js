import { 
	GET_USER_REQUEST,
	GET_USER_SUCCESS,
	GET_USER_FAIL
} from '../actions/UserAction';

const initialState = {
	data: {},
	error: false,
	errorMessage: '',
	isLoading: false
};

export const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_USER_REQUEST:
			return {
				...state,
				error: false,
			 	isLoading: true
			 }
		case GET_USER_SUCCESS:
			return {
				...state,
				data: action.payload,
				error: false,
				isLoading: false
			}
		case GET_USER_FAIL:
			return {
				...state,
				error: true,
				errorMessage: action.payload,
				isLoading: false
			}
 		default:
			return state;
	}
}
