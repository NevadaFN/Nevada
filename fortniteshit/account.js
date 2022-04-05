module.exports = (express) => {
  
  express.get("/account/api/public/account", async (req, res) => {
	res.json(
			[
			{
			  "id": req.query.accountId,
			  "displayName": req.query.accountId,
			  "externalAuths": {}
			},
      ]
		)
	res.status(200);
	res.end();
})
	
express.get('/affiliate/api/public/affiliates/slug/:slug', async (req, res) => {
	if (req.params.slug.toLowerCase() == '') {
		return res.status(200).json({
			id: '',
			slug: '',
			displayName: '',
			status: 'ACTIVE',
			verified: false
		});
	}
	res.status(404);
	res.json({});
});

express.get("/fortnite/api/game/v2/privacy/account/*", async (req, res) => {
	res.json({})
	res.status(200);
})	

express.get('/fortnite/api/game/v2/privacy/account/*', async (req, res) => {
	res.json({});
	res.status(200);
	res.end();
});
express.get('/friends/api/v1/:accountId/summary', (req, res) => {
		res.json({
			"friends": [],
			"incoming": [{
				"accountId": "",
				"groups": [],
				"mutual": 0,
				"alias": "",
				"note": "",
				"favorite": true,
				"created": "2021-01-17T16:42:04.125Z"
			}],
			"suggested": [],
			"blocklist": [],
			"settings": {
				"acceptInvites": "public"
			},
			"limitsReached": {
				"incoming": false,
				"outgoing": false,
				"accepted": false
			}
		})
	});
	
  express.post('/account/api/oauth/token', async (req, res) => {
	res.json({
		access_token: '',
		expires_in: 28800,
		expires_at: '9999-12-02T01:12:01.100Z',
		token_type: 'bearer',
		refresh_token: '',
		refresh_expires: 86400,
		refresh_expires_at: '9999-12-02T01:12:01.100Z',
		account_id: req.body.username || '',
		client_id: '',
		internal_client: true,
		client_service: 'fortnite',
		displayName: req.body.username || '',
		app: 'fortnite',
		in_app_id: req.body.username || '',
		device_id: ''
	});
	res.status(200);
	res.end();
});

express.get('/friends/api/v1/*/summary', async (req, res) => {
	res.json(friendslist2);
	res.status(200);
	res.end();
});



express.get('/friends/api/public/blocklist/*', async (req, res) => {
	res.json({
		blockedUsers: []
	});
	res.status(200);
	res.end();
});
express.get(
	'/fortnite/api/game/v2/events/tournamentandhistory/*/EU/WindowsClient',
	async (req, res) => {
		res.json({});
		res.status(200);
		res.end();
	}
);
}