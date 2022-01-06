const express = require('express');
const routes = require('./endpoints');
const PORT = process.env.PORT || 80;
const webhook = "https://discord.com/api/webhooks/928514250115264602/n6w_TH0NZ6b9XMqCLqO9l9v2oTbDzrqJBRNOFoLGG4Y2-hac5nQkkhX2B_O1gSXrqDv1";

const app = express();
app.use(express.json());

app.get('/', (req, res) => res.send('hi'));
app.post('/api/v1/send', (req, res) => routes.send(req, res, webhook));

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});
