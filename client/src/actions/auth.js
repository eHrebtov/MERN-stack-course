import axios from 'axios';
import { setAlert } from './alert';
import { REGISTER_SUCCESS, REGISTER_FAIL } from '../actions/types';

// Register user
export const register = ({ name, email, password }) => async dispatch => {
	const config = {
		headers: {
			'Content-Type': 'application/json',
		},
	};

	const body = JSON.stringify({ name, email, password });

	try {
		const res = await axios.post('/api/users', body, config);

		dispatch({
			type: REGISTER_SUCCESS,
			payload: res.data,
		});
	} catch (error) {
		const err = error.response.data.errors;

		if (err) {
			err.forEach(er => dispatch(setAlert(er.msg, 'danger')));
		}

		dispatch({
			type: REGISTER_FAIL,
		});
	}
};