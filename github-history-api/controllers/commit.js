'use strict'

const https = require('https');
const config = require('../config');

function getCommits (req, res) {
	console.log('GET /api/commit');
	const user = req.params.user;
    const repository = req.params.repository;
    const options = {
        hostname: config.hostname,
        path: `/repos/${user}/${repository}/commits`,
        headers: {
            'User-Agent': config.user_agent
        },
        OAUth: process.env.GITHUB_ACCESS_TOKEN
    }
    https.get(options, function (apiResponse) {
        apiResponse.pipe(res);
    }).on('error', (e) => {
        console.log(e);
        res.status(500).send(constants.error_message);
    })
};

module.exports = {
	getCommits
}