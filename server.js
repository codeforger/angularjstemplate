'use strict'

const express = require('express');
const port = 3000;

const app = express();

app.use(express.static('app/public_html'));

app.listen(port, function () {
    console.log("Server is running on http://localhost:"+ port);
});