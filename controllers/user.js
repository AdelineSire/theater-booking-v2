const express = require('express');
const router = express.Router();

const { User, Role } = require('../models');

const createUser = (req, res) => {
	const newUser = req.body;
	const date = Date.now();
	const user = new User({
		firstname: newUser.firstname,
		lastname: newUser.lastname,
		email: newUser.email,
		tel: newUser.tel,
		address: newUser.address,
	});

	Role.findOne({ name: newUser.role.name })
		.then((role) => {
			user.role = role;
			user.save(user);
		})
		.then((user) => res.json(user))
		.catch((err) => {
			res.json(err);
		});
};

const readUsers = (req, res) => {
	User.find({})
		.populate('role')
		.then((users) => {
			const usersSorted = users.sort((a, b) => (a > b ? -1 : +1));
			res.json(usersSorted);
		})
		.catch((err) => {
			console.log(err);
		});
};

const readUser = (req, res) => {
	const id = req.params.id;
	User.findOne({ _id: id })
		.populate('role')
		.then((user) => {
			console.log('user in readUser: ', user);
			res.json(user);
		})
		.catch((err) => {
			res.json(err);
		});
};

const updateUser = (req, res) => {
	const userId = req.params.id;
	const newValue = req.body.newValue;

	User.updateOne({ _id: userId, $set: newValue })
		.then((updatedUser) => {
			res.json(updatedUser);
		})
		.catch((err) => console.log(err));
};

router.route('/').post(createUser);
router.route('/').get(readUsers);
router.route('/:id').get(readUser);
router.route('/:id').put(updateUser);
module.exports = router;
