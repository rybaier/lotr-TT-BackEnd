const express = require('express')
const router = express.Router()

const Quote = require('../models/Quote')

router.get('/quotes', async (req, res, next) => {
    try {
        const quote = await Quote.find({});
        console.log(res.json(trip))
    } catch (err) {
        next(err)
    }
})

module.exports = router