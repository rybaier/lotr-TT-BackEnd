const mongoose = require('mongoose')

const QuoteSchema = new mongoose.Schema(
    {
        _id:  String,
        character: String,
        dialog: String,
        id: String,
        movie: String,
       
    }
)

const Quote = mongoose.model('Quote', QuoteSchema)

module.exports = Quote