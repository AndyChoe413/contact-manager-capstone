const express = require('express')
const router = express.Router()
// const validator = require('validator')
const {check, validationResult} = require('express-validator')

//schema
const User = require('../models/User')

router.post('/', [
    check('name', 'a name is required').not().isEmpty(),
    check('email', 'please enter a valid email').isEmail(),
    check('password', 'please ender a password with 6 or more characters').isLength({min: 6})
],
    (req, res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({errors:errors.array()})
        }
        res.send('passed')
})

module.exports = router