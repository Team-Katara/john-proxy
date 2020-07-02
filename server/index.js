const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const port = process.env.PORT || 3000;

app.use(cors());
app.use(morgan('dev'));
app.use(express.static('dist'));

// app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Proxy server listening at http://localhost:${port}`))