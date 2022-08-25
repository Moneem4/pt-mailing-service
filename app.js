require('dotenv').config();
const express = require('express');
const path = require('path');
const port = process.env.PORT || 5000;

/**
 * API mapping.
 */
const routes = require('./routes/apiRouter');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json());
app.use(routes);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})