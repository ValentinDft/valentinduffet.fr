require('dotenv').config();
var express = require('express');
var router = express.Router();

var API_KEY_MAILJET1 = process.env.API_KEY_MAILJET1;
var API_KEY_MAILJET2 = process.env.API_KEY_MAILJET2;
var EMAIL_FROM = process.env.EMAIL_FROM;

/* GET home page. */
router.post('/email', function(req, res, next) {
  let email = req.body.email;
  let nom = req.body.nom;
  let message = req.body.message;

	const mailjet = require('node-mailjet').connect(
		API_KEY_MAILJET1,
		API_KEY_MAILJET2
	);
	const request = mailjet.post('send', { version: 'v3.1' }).request({
		Messages: [
			{
				From: {
					Email: EMAIL_FROM,
					Name: nom,
				},
				To: [
					{
						Email: "valentinduffet@orange.fr",
						Name: 'Valentin',
					},
				],
				Subject: 'Contact portfolio',
				HTMLPart:
					'<h5>' + nom + '</h5> <br> <h4>' + message + '</h4> <br> <h4>' + email + '</h4>',
			},
		],
	});

	request
		.then((result) => {
			console.log(result.body);
			let status = result.body.Messages[0].Status;
			let send = false;

			if (status === 'success') {
				res.json({ send: true });
			} else {
				res.json({ send: false });
			}
		})
		.catch((err) => {
			console.log(err.statusCode);
		});
});

module.exports = router;
