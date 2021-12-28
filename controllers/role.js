const { Role } = require('../models');

const readRoles = (req, res) => {
	Role.find({})
		.then((roles) => res.json(roles))
		.catch((err) => {
			console.log('error in readRoles', err);
		});
};

module.exports = readRoles;
