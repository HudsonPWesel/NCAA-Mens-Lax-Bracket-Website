const express = require('express');
const router = express.Router();

router.post('/product', (req, res) => {
	res.send(req.body);
});
router.get('/', (req, res) => {
	res.send(
		'<form action="/sign-up/product" method="POST"> <input type="text" name="title"> <input type="submit"> </form>'
	);
});

module.exports = router;
