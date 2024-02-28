const express = require('express');

const app = express();
const port = 7865;

app.listen(port, () => {
  console.log(`API available on http://localhost:${port}`);
});

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id', (req, res) => {
  const { id } = req.params;
	if (!/^\d+$/.test(id)) {
		res.status(404).end();
		return;
	}
	res.send(`Payment methods for cart ${cartId}`);
});

app.get('/available_payments', (req, res) => {
  res.json({
    payment_methods: {
      credit_cards: true,
      paypal: false,
    },
  });
});

app.post('/login', express.json(), (req, res) => {
  const { userName } = req.body;
  res.send(`Welcome ${userName}`);
});

app.listen(port, () => {
  console.log(`API available on http://localhost:${port}`);
});

module.exports = app;
