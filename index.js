const express = require('express');
const app = express();
const cors = require('cors')

app.use(express.json());
app.use(cors());

const todoRoutes = require('./routes/todoRoutes');
const userRoutes = require('./routes/userRoutes');

app.use('/todos', todoRoutes.router);
app.use('/users', userRoutes.router);

module.exports = {
    app: app
}