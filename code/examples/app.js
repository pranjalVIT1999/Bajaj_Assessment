const express = require('express')
const mongoose = require('mongoose')
const customerRoute = require('./routes/CustomerRoute')
const orderRoute = require('./routes/OrdersRoute')
const app = express()
app.use(express.json())

mongoose
    .connect("mongodb://localhost/project", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("Successfully connect to MongoDB."))
    .catch(err => console.error("Connection error", err));

app.use('/customer', customerRoute)
app.use('/orders',orderRoute)
app.listen(8080,() => console.log("server started"))