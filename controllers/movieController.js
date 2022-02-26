const express = require('express')
const router = express.Router()
const Movie = require('../models/Movie')

router.get('/movies', async (req, res, next) => {
    try {
        const movie = await Movie.find({})
        console.log(res.json(movie))
    } catch (err) {
        next(err)
    }
})

module.exports = router 