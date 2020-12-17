var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/email', function(req, res, next) {
  let email = req.body.email;
  let nom = req.body.nom;
  let message = req.body.message;

	const mailjet = require('node-mailjet').connect(
		'f2d633f385e5b3e93d3d530551330ba1',
		'17a3eb01e66471749a2517f2e2cb96fa'
	);
	const request = mailjet.post('send', { version: 'v3.1' }).request({
		Messages: [
			{
				From: {
					Email: email,
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
					'<h5>' + nom + '</h5> <br> <h4>' + message + '</h4>',
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
