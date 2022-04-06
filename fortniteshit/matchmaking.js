module.exports = (express) => {
express.get(
	'/fortnite/api/game/v2/matchmaking/account/:accountId/session/:sessionId',
	async (req, res) => {
		res.json({
			accountId: req.params.accountId,
			sessionId: req.params.sessionId,
			key: 'AOJEv8uTFmUh7XM2328kq9rlAzeQ5xzWzPIiyKn2s7s='
		});
		res.status(200);
		res.end();
	}
);

express.post(
	'/fortnite/api/matchmaking/session/matchMakingRequest',
	async (req, res) => {
		res.json([]);
		res.status(200);
		res.end();
	}
);

express.get(
	'/fortnite/api/matchmaking/session/findPlayer/*',
	async (req, res) => {
		res.json();
		res.status(200);
		res.end();
	}
);

}
