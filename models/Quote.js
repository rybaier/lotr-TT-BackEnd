const mongoose = require('mongoose')

const QuoteSchema = new mongoose.Schema(
    {
        character: String,
        dialog: String,
        id: String,
        movie: String,
        __id: String
    }
)

const Quote = mongoose.model('Quote', QuoteSchema)

module.exports = Quote