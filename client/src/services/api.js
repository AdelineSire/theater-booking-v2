import axios from 'axios';
import API_URL from './config';

const resData = (res) => {
	return res.data;
};

// Get plays and theaters
const getData = (dataType) => {
	return axios.get(API_URL + dataType).then(resData);
};

// Play
const createPlay = (play) => {
	return axios.post(API_URL + 'play', play).then(resData);
};

// Theater
const createTheater = (theater) => {
	return axios.post(API_URL + 'theater', theater).then(resData);
};

// Show
const createShow = (show) => {
	console.log('show in createShow', show);
	return axios.post(API_URL + 'show', show).then(resData);
};

const getShows = () => {
	return axios.get(API_URL + 'show').then(resData);
};

const getShow = (id) => {
	return axios.get(API_URL + 'show/' + id).then(resData);
};

// User
const createUser = (user) => {
	console.log('user in createUser', user);
	return axios.post(API_URL + 'user', user).then(resData);
};

const getUsers = () => {
	return axios.get(API_URL + 'user').then(resData);
};

const updateUser = (id, newValue) => {
	console.log('newValue in updateUser', newValue);
	console.log('id in updateUser', id);
	return axios.put(API_URL + 'user/' + id, { newValue }).then(resData);
};

export {
	createPlay,
	getData,
	createTheater,
	createShow,
	getShows,
	getShow,
	createUser,
	getUsers,
	updateUser,
};
