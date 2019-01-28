const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const dev_db_url = 'mongodb+srv://jashment:Password1!@nodeserver1-ushmx.mongodb.net/admin'

//const mongoDB = proces.env.MONGODB_URI || 

const product = require('./routes/product.route')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use('/products', product)

const port = 5775

app.listen(port, () => {
    console.log(`Server is up and running on ${port}`)
})

