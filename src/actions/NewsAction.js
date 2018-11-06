import { httpGetNews, cachedNews } from '../utils/network';

export const GET_NEWS_REQUEST = 'GET_NEWS_REQUEST';
export const GET_NEWS_SUCCESS = 'GET_NEWS_SUCCESS';
export const GET_NEWS_FAIL = 'GET_NEWS_FAIL';

export const getNews = () => {
	return dispatch => {
		if (!cachedNews) {	
			dispatch({
				type: GET_NEWS_REQUEST
			});

			httpGetNews(dispatch);
		} 
	}
}