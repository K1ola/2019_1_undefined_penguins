'use strict';

const express = require('express');
const body = require('body-parser');
const cookie = require('cookie-parser');
const morgan = require('morgan');
const uuid = require('uuid/v4');
const path = require('path');
const app = express();


app.use(morgan('dev'));
app.use(express.static(path.resolve(__dirname, '..', 'public')));
app.use(body.json());
app.use(cookie());

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
 });

const users = {
	'a.penguin1@corp.mail.ru': {
		login: 'Penguin1',
		email: 'a.penguin1@corp.mail.ru',
		password: 'password',
		name: 'Пингвин Северного Полюса',
		lastVisit: '25.02.2019',
		score: 0,
		avatarName: 'default1.png',
		avatarBlob: './images/user.svg'
	},
	'b.penguin2@corp.mail.ru': {
		login: 'Penguin2',
		email: 'b.penguin2@corp.mail.ru',
		password: 'password',
		name: 'Пингвин Южного Полюса',
		lastVisit: '26.02.2019',
		score: 100500,
		avatarName: 'default2.png',
		avatarBlob: './images/user.svg'
	},
	'c.penguin3@corp.mail.ru': {
		login: 'Penguin3',
		email: 'c.pengin3@corp.mail.ru',
		password: 'password',
		name: 'Залетный Пингвин',
		lastVisit: '14.02.2019',
		score: 172,
		avatarName: 'default3.png',
		avatarBlob: './images/user.svg'
	},
	'd.penguin4@corp.mail.ru': {
		login: 'Penguin4',
		email: 'd.penguin4@corp.mail.ru',
		password: 'password',
		name: 'Рядовой Пингвин',
		lastVisit: '15.02.2019',
		score: 72,
		avatarName: 'default4.png',
		avatarBlob: './images/user.svg'
	},
};

const ids = {};

app.use( (req, res, next) => {
		res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
		res.setHeader('Access-Control-Allow-Credentials', 'true');
		res.setHeader('Access-Control-Allow-Headers', 'content-type');
		res.header("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE");
    

	next();
});

app.post('/signup', function (req, res) {
	const password = req.body.password;
	const email = req.body.email;
	if (
		!password || !email ||
		!password.match(/^\S{4,}$/) ||
		!email.match(/@/)
	) {
		return res.status(400).json({error: 'Невалидные данные пользователя'});
	}
	if (users[email]) {
		return res.status(400).json({error: 'Пользователь уже существует'});
	}

	const id = uuid();
	const user = {
		login: '-не указан-', 
		email, 
		password, 
		name: '-не указано-', 
		lastVisit: 'today', 
		score: 0,
		avatarName: 'default.png',
		avatarBlob: './images/user.svg'
	};
	ids[id] = email;
	users[email] = user;

	res.cookie('sessionid', id, {expires: new Date(Date.now() + 1000 * 60 * 10)});
	res.status(201).json({id});
});

app.post('/login', function (req, res) {
	const password = req.body.password;
	const email = req.body.email;
	if (!password || !email) {
		return res.status(400).json({error: 'Не указан E-Mail или пароль'});
	}
	if (!users[email] || users[email].password !== password) {
		return res.status(400).json({error: 'Неверный E-Mail и/или пароль'});
	}

	const id = uuid();
	ids[id] = email;

	res.cookie('sessionid', id, {expires: new Date(Date.now() + 1000 * 60 * 10)});
	res.status(200).json({id});
});

app.get('/signout', function (req, res){
	const id = req.cookies['sessionid'];
	const email = ids[id];
	if (!email || !users[email]) {
		return res.status(401).end();
	}
	res.clearCookie('sessionid');
	res.json({ status: 'successfully signed out' })

});

app.get('/me', function (req, res) {
	const id = req.cookies['sessionid'];
	const email = ids[id];
	if (!email || !users[email]) {
		return res.status(401).end();
	}

	// users[email].score += 1;

	res.json(users[email]);
});

app.post('/change_profile', function (req, res) {
	const id = req.cookies['sessionid'];
	const email = ids[id];
	if (!email || !users[email]) {
		return res.status(401).end();
	}

	ids[id] = email;

	users[email].email = req.body.email;
	users[email].login = req.body.login;
	users[email].name = req.body.name;
	users[email].avatarName = req.body.avatarName;
	users[email].avatarBlob = req.body.avatarBlob;
	const result = users[email].avatarBlob;

	//what for?
	res.cookie('sessionid', id, {expires: new Date(Date.now() + 1000 * 60 * 10)});
	res.status(201).json({result});
});

// app.get('/about', function (req, res) {

// });

app.post('/leaders', function (req, res) {
	const scorelist = Object.values(users)
		.sort((l, r) => r.score - l.score)
		.map(user => {
			return {
				email: user.email,
				score: user.score,
			}
		});
	const from = req.body.page * req.body.items
	console.log(from)
	const to = req.body.page * req.body.items + req.body.items
	console.log(to)

	res.json(scorelist.slice(from, to));
});

const port = process.env.PORT || 3000;

app.listen(port, function () {
	console.log(`Server listening port ${port}`);
});