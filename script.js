const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.json());

let messages = [];

app.get('/getMessages', (req, res) => {
    res.json({ messages });
});

app.post('/postMessage', (req, res) => {
    const { message } = req.body;
    if (message) {
        messages.push(message);
    }
    res.json({ messages });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
