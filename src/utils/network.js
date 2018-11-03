import { 
    GET_NEWS_REQUEST,
    GET_NEWS_SUCCESS,
    GET_NEWS_FAIL
} from '../actions/NewsAction';

export let cached = false;

const API_ROOT = 'https://5bc443613e0ce20013533336.mockapi.io';

export const httpGetNews = async (dispatch) => {
    try {
        const response = await fetch(`${API_ROOT}/projects`);

        if (response.ok) {
            const json = await response.json();

            cached = true;

            dispatch({
                type: GET_NEWS_SUCCESS,
                payload: json.news
            })
        } else {
            throw new Error(response.status);
        }
    } catch (e) {
        dispatch({
            type: GET_NEWS_FAIL,
            error: true,
            payload: new Error(e)
        })
    }
}