import { GET_NEWS_SUCCESS } from '../actions/NewsAction';
import { GET_NEWS_REQUEST } from '../actions/NewsAction';
import { GET_NEWS_FAIL } from '../actions/NewsAction';

const initialState = {
	articles: [],
	error: false,
	errorMessage: '',
	isFetching: true
};

export const newsReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_NEWS_REQUEST:
			return {
				...state
			}
		case GET_NEWS_SUCCESS:
			return {
				...state,
				articles: action.payload,
				isFetching: false
			}
		case GET_NEWS_FAIL:
			return {
				...state,
				error: true,
				errorMessage: action.payload,
				isFetching: false
			}
 		default:
			return state;
	}
}