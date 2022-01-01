import axios from 'axios';
import API_URL from './config';

const signup = (user) => {
	return axios.post(API_URL + 'signup', user).then((response) => {
		return response.data.success;
	});
};

const login = (user) => {
	return axios.post(API_URL + 'login', user).then((response) => {
		if (response.data.accessToken) {
			const user = { id: response.data._id, role: response.data.role._id };
			localStorage.setItem('user', JSON.stringify(user));
		}
		return response.data;
	});
};

const logout = () => {
	localStorage.removeItem('user');
};

export { signup, login, logout };
