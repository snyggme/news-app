import auth from '../utils/auth';

export const ADD_BOOKMARK_SUCCESS = 'ADD_BOOKMARK_SUCCESS';
export const ADD_BOOKMARK_FAIL = 'ADD_BOOKMARK_FAIL';
export const DELETE_BOOKMARK = 'DELETE_BOOKMARK';
export const CLEAR_BOOKMARK_TOOLTIP = 'CLEAR_BOOKMARK_TOOLTIP';

export const addBookmark = (article) => {
	return (dispatch, getState) => {

		if (auth.isAuthenticated()) {
			const currentBookmarks = [...getState().bookmarks.articles];
			let isAdded = false;

			currentBookmarks.map(({ id, name }) => {
				if (id === article.id){
					isAdded = true;
				}
			})

			if (isAdded) {
				dispatch({
					type: ADD_BOOKMARK_FAIL,
					payload: { 
						text: 'This bookmark already exists.',
						articleId: article.id
					}
				})
			} else {
				dispatch({
					type: ADD_BOOKMARK_SUCCESS,
					payload: { 
						article, 
						message: { 
							text:'Bookmark added!',
							articleId: article.id
						}
					}
				});
			}
		} else {
			dispatch({
				type: ADD_BOOKMARK_FAIL,
				payload: {
					text: 'You need to be authorized to add bookmarks.',
					articleId: article.id
				}
			})
		}
	}
}

export const deleteBookmark = (i) => {
	return (dispatch, getState) => {
		const currentBookmarks = [...getState().bookmarks.articles];
		let bookmarkIndex;

		currentBookmarks.map(({ id, name }, index) => {
			if (id === i){
				bookmarkIndex = index;
			}
		})

		dispatch({
			type: DELETE_BOOKMARK,
			payload: bookmarkIndex 
		});
	}
}

export const clearBookmarksTooltip = () => {
	return dispatch => {
		dispatch({
			type: CLEAR_BOOKMARK_TOOLTIP
		});
	}
}