const express = require('express')
const router = express.Router()



router.get('/', (req, res) => {
    res.send('Get all contacts')
})

router.post('/', (req, res) => {
    res.send('Add new contacts')
})

router.put('/:id', (req, res) => {
    res.send('Update contacts by id')
})

router.delete('/:id', (req, res) => {
    res.send('delete contacts by id')
})

module.exports = router