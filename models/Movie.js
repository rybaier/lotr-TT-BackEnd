const mongoose = require('mongoose')

const MovieSchema = new mongoose.Schema(
    {
        _id: String,
        academyAwardNominations: Number,
        academyAwardWins: Number,
        boxOfficeRevenueInMillions: Number,
        name: String,
        rottenTomatoesScore: Number,
        runtimeInMinutes: Number
    }
)

const Movie = mongoose.model('Movie', MovieSchema)

module.exports = Movie