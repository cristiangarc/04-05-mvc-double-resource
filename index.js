const express = require('express');
const app = express();
const cors = require('cors')

app.use(express.json());
app.use(cors());

const todoRoutes = require('./routes/todoRoutes');
const userRoutes = require('./routes/userRoutes');

app.use(todoRoutes.router);
app.use(userRoutes.router);

module.exports = {
    app: app
}