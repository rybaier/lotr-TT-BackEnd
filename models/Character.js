const mongoose = require('mongoose')

const CharacterSchema = new mongoose.Schema(
    {
        _id:  String,
        birth: String,
        death: String,
        gender: String,
        hair: String,
        height: String,
        name: String,
        race: String,
        realm: String,
        spouse: String,
        wikiUrl: String,
    }
)

const Character = mongoose.model("Character", CharacterSchema)

module.exports = Character