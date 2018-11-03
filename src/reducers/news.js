import { GET_NEWS_SUCCESS } from '../actions/NewsAction';
import { GET_NEWS_REQUEST } from '../actions/NewsAction';
import { GET_NEWS_FAIL } from '../actions/NewsAction';

const initialState = {
	articles: [],
	error: '',
	isFetching: false
};

export const newsReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_NEWS_REQUEST:
			return {
				...state,
				isFetching: true
			}
		case GET_NEWS_SUCCESS:
			return {
				articles: action.payload,
				error: '',
				isFetching: false
			}
		case GET_NEWS_FAIL:
			return {
				...state,
				error: action.payload.message,
				isFetching: false
			}
 		default:
			return state;
	}
}