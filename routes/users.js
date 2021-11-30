const express = require('express')
const router = express.Router()

//schema
const User = require('../models/User')

router.post('/', (req, res) => {
    res.send(req.body)
})

module.exports = router