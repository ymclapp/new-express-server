'use strict';

require('dotenv').config();

const express = require('express');

const cors = require('cors');
const { application } = require('express');

const PORT = process.env.PORT;
const app = express();
app.get('/', (request, response ) => {
    response.send('Home Page!');
});


//Make sure the server is listening for requests
app.listen(PORT, () => console.log(`App is listening on http://localhost:${PORT}`));