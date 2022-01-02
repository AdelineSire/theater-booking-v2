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

const getCurrentUser = () => {
	const user = JSON.parse(localStorage.getItem('user'));
	if (user) {
		return axios
			.get(API_URL + 'user/' + user.id)
			.then((response) => {
				return response.data;
			})
			.catch((err) => {
				console.log('err', err);
			});
	} else return new Promise((resolve) => resolve(null));
};

export { signup, login, logout, getCurrentUser };
