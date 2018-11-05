import { 
    GET_NEWS_SUCCESS,
    GET_NEWS_FAIL
} from '../actions/NewsAction';
import {
    POST_LOGIN_SUCCESS,
    POST_LOGIN_FAIL
} from '../actions/UserAction';
import auth from './auth';

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
            payload: new Error(e).message
        })
    }
}

export const httpPostLogin = async (dispatch, data) => {  
     try {
        const response = await fetch('https://mysterious-reef-29460.herokuapp.com/api/v1/validate', {  
            "method": "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            const json = await response.json();

            if (json.status === 'ok') {

                auth.login();

                dispatch({
                    type: POST_LOGIN_SUCCESS,
                    payload: json.data.id
                })
            } else {
                dispatch({
                    type: POST_LOGIN_FAIL,
                    error: true,
                    payload: json.message
                })
            }
        } else {
            throw new Error(response.status);
        }
    } catch (e) {
        dispatch({
            type: POST_LOGIN_FAIL,
            error: true,
            payload: new Error(e).message
        })
    }
}