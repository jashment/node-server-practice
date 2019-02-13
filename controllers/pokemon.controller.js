const Pokemon = require('../models/pokemon.model')

// exports.test = (req, res) => {
//     res.send('Greetings from the test controller')
// }

exports.all = (req, res, next) => {
    Pokemon.find({})
    .then((allPokemon) => res.json(allPokemon))
}

exports.find_one = (req, res, next) => {
    Pokemon.findOne({
        name: req.params.name
    })
    .then((foundPokemon) => res.json(foundPokemon))
}

exports.pokemon_create = (req, res, next) => {
    let pokemon = new Pokemon({
        name: req.body.name,
        url: req.body.url,
        height: req.body.height,
        weight: req.body.weight,
        sprite: req.body.sprite
    })

    pokemon.save((err) => {
        if (err) {
            return next(err)
        }
        res.json(pokemon)
    })
}

exports.pokemon_update = (req, res, next) => {
    Pokemon.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        (err, pokemon) => {
          if (err) return next(err)
          res.send(`${pokemon.name} Pokemon updated.`)
        }
      )
}

exports.pokemon_delete = (req, res, next) => {
    Pokemon.findByIdAndRemove(req.params.id, (err, pokemon) => {
        if (err) return next(err)
        res.send(`${pokemon.name} Deleted successfully`)
    })
}