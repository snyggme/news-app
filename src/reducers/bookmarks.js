import { ADD_BOOKMARK_SUCCESS } from '../actions/BookmarkAction';
import { ADD_BOOKMARK_FAIL } from '../actions/BookmarkAction';
import { DELETE_BOOKMARK } from '../actions/BookmarkAction';
import { CLEAR_BOOKMARK_TOOLTIP } from '../actions/BookmarkAction';

const initialState = {
	articles: [],
	errorMessage: '',
	showTooltip: false
};

export const bookmarksReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_BOOKMARK_SUCCESS:
			return {
				...state,
				articles: [
					...state.articles,
					action.payload
				],
				showTooltip: true
			}
		case ADD_BOOKMARK_FAIL:
			return {
				...state,
				errorMessage: action.payload,
				showTooltip: true
			}
		case CLEAR_BOOKMARK_TOOLTIP:
			return {
				...state,
				showTooltip: false
			}
		case DELETE_BOOKMARK:
			const i = action.payload;
			return {
				articles: [
					...state.articles.slice(0, i),
					...state.articles.slice(i + 1)
				],
				showTooltip: false
			}
 		default:
			return state;
	}
}