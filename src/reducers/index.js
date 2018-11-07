import { combineReducers } from 'redux';
import { newsReducer } from './news';
import { userReducer } from './user';
import { loginReducer } from './login';
import { bookmarksReducer } from './bookmarks';

export const rootReducer = combineReducers({
	news: newsReducer,
	user: userReducer,
	login: loginReducer,
	bookmarks: bookmarksReducer
})