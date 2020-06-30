const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT;

app.use(express.static(path.join(__dirname, '../dist')));

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))