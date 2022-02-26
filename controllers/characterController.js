const express = require('express')
const router = express.Router()

const Character = require('../models/Character')

router.get('/characters', async (req, res, next) =>{
    try {
        const character = await Character.find({})
        console.log(res.json(character))
    } catch (err) {
        next(err)
    }
})