import { combineReducers } from 'redux';
import { newsReducer } from './news';
import { userReducer } from './user';
import { loginReducer } from './login';

export const rootReducer = combineReducers({
	news: newsReducer,
	user: userReducer,
	login: loginReducer  
})