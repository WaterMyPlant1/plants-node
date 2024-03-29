const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const usersRouter = require("./data/users-router")

const server = express()
server.use(express.json())
server.use(helmet())
server.use(cors())

server.use('/api/users', usersRouter);

server.get("/", (req, res) => {
    res.json({api: "up"})
})

module.exports = server
