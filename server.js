const express = require('express');
const cors = require('cors');

// App
const app = express();
app.use(express.static('public'));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Models
const { Role } = require('./models');

// BD connection
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const dbConfig = require('./config/db.config.js');
const MONGODB_URI =
	process.env.MONGODB_URI ||
	`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`;

mongoose
	.connect(MONGODB_URI)
	.then(() => {
		console.log('Successfully connected to MongoDB.');
		initial();
	})
	.catch((err) => {
		console.error('Connection error', err);
		process.exit();
	});

// Creates roles (spectator, seller, host, admin) in DB
const initial = () => {
	Role.estimatedDocumentCount((err, count) => {
		if (!err && count === 0) {
			new Role({
				name: 'Spectateur',
			}).save((err) => {
				if (err) {
					console.log('error', err);
				}
				console.log("added 'spectator' to roles collection");
			});

			new Role({
				name: 'Vendeur',
			}).save((err) => {
				if (err) {
					console.log('error', err);
				}
				console.log("added 'seller' to roles collection");
			});

			new Role({
				name: 'Hôte',
			}).save((err) => {
				if (err) {
					console.log('error', err);
				}
				console.log("added 'host' to roles collection");
			});

			new Role({
				name: 'Admin',
			}).save((err) => {
				if (err) {
					console.log('error', err);
				}
				console.log("added 'admin' to roles collection");
			});
		}
	});
};

// Middlewaresn
const checkDuplicateEmail = require('./middlewares/checkDuplicateEmail');

// Controllers
const { play, theater, show, user, role, auth } = require('./controllers');

// Routes

app.post('/signup', [checkDuplicateEmail], auth.signup);
app.post('/login', auth.login);
app.use('/play', play);
app.use('/theater', theater);
app.use('/show', show);
app.use('/user', user);
app.get('/role', role);

// set port, listen for requests
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}.`);
});
