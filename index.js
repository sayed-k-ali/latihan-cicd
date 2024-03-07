const express = require('express')
const logger = require('pino').pino();
const httpLogger = require("express-pino-logger")


const app = express();

app.use(httpLogger())

app.get("/hello", (req, res) => {
    res.sendStatus(200)
})

app.listen(process.env.PORT, () => logger.info(null, "Server run on port %d", process.env.PORT))