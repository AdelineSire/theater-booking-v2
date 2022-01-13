const express = require('express');
const router = express.Router();

const { Show, Theater } = require('../models');

const createSeats = (row, col) => {
	let seats = [];
	for (let ir = row; ir > 0; ir--) {
		const chunck = [];
		for (let ic = 65; ic <= col + 65; ic++) {
			let letter = String.fromCharCode(ic);
			chunck.push({ id: `${ir}${letter}`, isBooked: false });
		}
		seats.push(chunck);
	}
	return seats;
};

const transformDate = (date) => {
	const year = date.slice(2, 4);
	const month = date.slice(5, 7);
	const day = date.slice(8, 10);
	const time = date.slice(11, 16);
	const formatedDate = `${day}/${month}/${year}`;
	return { date: formatedDate, time: time };
};

const createShow = async (req, res) => {
	const newShow = req.body;
	newShow.formatedDate = transformDate(newShow.date);
	const seats = await Theater.findOne({ id: newShow.theater }).then(
		(theater) => {
			return createSeats(theater.row, theater.col);
		}
	);
	newShow.seats = seats;

	const show = new Show(newShow);

	show
		.save(show)
		.then((show) => res.json(show))
		.catch((err) => {
			res.json(err);
		});
};

const readShows = (req, res) => {
	const today = new Date();
	Show.find({ date: { $gt: today } })
		.populate(['play', 'theater'])
		.then((result) => {
			console.log('result', result);
			res.json(result);
		})
		.catch((err) => {
			res.json(err);
		});
};

const readShow = (req, res) => {
	const id = req.params.id;
	Show.findOne({ _id: id })
		.populate(['play', 'theater'])
		.then((show) => {
			const date = transformDate(show.date);
			const formatedShow = {
				_id: show._id,
				price1: show.price1,
				price2: show.price2,
				play: show.play.title,
				theater: {
					name: show.theater.name,
					address: show.theater.address,
				},
				seats: show.seats,
				date: date,
			};
			res.json(formatedShow);
		})
		.catch((err) => {
			res.json(err);
		});
};

router.route('/').post(createShow);
router.route('/').get(readShows);
router.route('/:id').get(readShow);
module.exports = router;
