const express = require('express')
const router = express.Router()
const Customer = require('../models/CustomerModel')

router.post('/addCustomer', async (req, res) => {
    try {
        console.log(req.body)
        const customer = new Customer(req.body);
        await customer.save();
        return res.json({data:customer})
    }
    catch (err) {
        return res.json(err)
    }
})

router.get('/getCustomers', async (req, res) => {
    try {
        const customer = await Customer.find()
        return res.json(customer)
    }
    catch (err) {
        return res.json(err)
    }
})

router.get('/getOrders/:id', async (req, res) => {
    try {
        const id = req.params.id
        const customer = await Customer.findById({ _id: id })
        return res.json(customer.orders)
    }
    catch (err) {
        return res.json(err)
    }
})
module.exports = router