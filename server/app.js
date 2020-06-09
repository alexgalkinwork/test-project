const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const routes = require('./routes/routes');
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/', routes);

app.listen(process.env.PORT || 3000, () => console.log('Server running'));
