// app.js

const express  = require('express');
require("dotenv").config();

const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Importar as rotas
const homeRouter = require('./routers/home');
const userRouter = require('./routers/userRouter');

app.use("/home", homeRouter);
app.use("/userRouter", userRouter);

app.listen(port, () => {
    console.log(`Server listening on ${port}`);
});