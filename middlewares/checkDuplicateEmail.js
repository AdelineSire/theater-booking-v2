const { User } = require('../models');

const checkDuplicateEmail = (req, res, next) => {
	User.findOne({
		email: req.body.email,
	}).exec((err, user) => {
		if (err) {
			res.status(500).send({ message: err });
			return;
		}

		if (user) {
			res.send({ success: false });
			return;
		}

		next();
	});
};

module.exports = checkDuplicateEmail;
