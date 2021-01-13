var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/email', function(req, res, next) {
  let email = req.body.email;
  let nom = req.body.nom;
  let message = req.body.message;

	const mailjet = require('node-mailjet').connect(
		'42ff3ce7f88c57a2840a85238dab2c9a',
		'6d1458fa5a4bd08bb2d8613deab4a13c'
	);
	const request = mailjet.post('send', { version: 'v3.1' }).request({
		Messages: [
			{
				From: {
					Email: "vavadu07@gmail.com",
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
