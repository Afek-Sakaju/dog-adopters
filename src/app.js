const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/', (req, res, next) => {
    res.send('welcome every one');
});

app.use((err, req, res, next) => {
    console.error(`${req.method}:${req.originalUrl}, failed with error:${err}`);
    next(err);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`server is up on: http://localhost:${PORT}`);
});
