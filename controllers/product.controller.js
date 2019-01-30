const {Product, Pokemon} = require('../models/product.model')

exports.test = (req, res, next) => {
    res.send('Greetings from the test controller')
}

exports.product_create = (req, res, next) => {
    let product = new Product({
        name: req.body.name,
        price: req.body.price,
    })

    product.save((err) => {
        if (err) {
            return next(err)
        }
        res.send('Product created successfully')
    })
}

exports.pokemon_create = (req, res, next) => {
    let pokemon = new Pokemon({
        name: req.body.name,
        url: req.body.url,
    })

    pokemon.save((err) => {
        if (err) {
            return next(err)
        }
        res.send('Pokemon Created!')
    })
}