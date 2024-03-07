const express = require('express')
const logger = require('pino').pino();
const httpLogger = require("express-pino-logger");
const P = require('pino');


const app = express();

app.use(httpLogger())

app.get("/hello", (req, res) => {
    res.sendStatus(200)
})

app.get('/sebutnamasaya', (req, res) => {
    const nama = req.query.nama;
    res.status(200).send(nama)
})

app.get("/alamat", (req, res) => {
    const where = req.query.where;
    res.status(200).send(where)
})

app.listen(process.env.PORT, () => logger.info(null, "Server run on port %d", process.env.PORT))