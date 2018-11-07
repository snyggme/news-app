import { httpGetUserInfo, cachedUser } from '../utils/network';
import auth from '../utils/auth';

export const GET_USER_REQUEST = 'GET_USER_REQUEST';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAIL = 'GET_USER_FAIL';

export const getUserInfo = () => {
	return (dispatch, getState) => {
		if (!cachedUser) {
			const id = auth.getId();

			if (id !== null) {
				dispatch({
					type: GET_USER_REQUEST
				});

				httpGetUserInfo(dispatch, id);
			}
		}
	}
}