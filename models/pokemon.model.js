const mongoose = require('mongoose')
mongoose.set('useFindAndModify', false)
const Schema = mongoose.Schema

const PokemonSchema = new Schema({
    name: {type: String, required: true},
    url: {type: String, required: false},
    height: {type: Number, required: true},
    weight: {type: Number, required: true},
    sprite: {type: String, required: false }
})

module.exports = mongoose.model('Pokemon', PokemonSchema)