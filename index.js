const Express = require('express');
const axios = require('axios').default;
const express = Express();
const fs = require('fs');
const path = require('path');
const bodyparser = require('body-parser');
express.use(bodyparser.json());
express.use(bodyparser.urlencoded({ extended: true }));
express.use(Express.static('managers'));
const errors = require("./managers/errors");
const Flowlog = require('./managers/Flowlog')

const port = require(`./port.json`)

express.listen(process.env.port || port.port || 3551, () => {
    Flowlog.Log('Created by Nevada devs')
    Flowlog.Log(`listening to port\x1b[36m ${port.port} \x1b[0m`)
    Flowlog.Server(`Enjoy Nevada`)
});


fs.readdirSync(`${__dirname}/fortniteshit`).forEach(route => {
		require(`${__dirname}/fortnite/${route}`)(express, port);
	})
fs.readdirSync(`${__dirname}/managers`).forEach(route => {
		require(`${__dirname}/managers/profile.js`)(express, port);
	})

express.get('/fortnite/api/storefront/v2/catalog', async (req, res) => {
	res.json(require('./ui/shop.js'));
   
});
express.get('/launcher/api/public/distributionpoints/', async (req, res) => {
	res.json({
		distributions: [
			'https://download.epicgames.com/',
			'https://download2.epicgames.com/',
			'https://download3.epicgames.com/',
			'https://download4.epicgames.com/',
			'https://epicgames-download1.akamaized.net/',
      'https://fastly-download.epicgames.com/'
		]
	});
	res.status(200);
	res.end();
});
