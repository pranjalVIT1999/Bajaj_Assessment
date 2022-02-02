const express = require('express')
const Order = require('../models/OrderModel')
const Customer = require('../models/CustomerModel')
const res = require('express/lib/response')
const router = express.Router()

router.post('/', async (req, res) => {
    try {
        const { productName, quantity, customer } = req.body
        const order = new Order(
            { productName, quantity, customer }
        )
        await order.save()
        const customerExist = await Customer.findById({ _id: customer })
        customerExist.orders.push(order)
        await customerExist.save()
        return res.json(order)

    }
    catch (err) {
        return res.json(err)
    }
})

router.get('/', async (req, res) => {
    try{
        const orders = await Order.find();
        res.send(orders)
    }
    catch(err) {
        res.send(err)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const order = await Order.findById({ _id: id })
        return res.json(order)
    }
    catch (err) {
        return res.send(err)
    }
})

router.patch("/:id", async (req, res) => {
    try {
        const id = req.params.id
        const order = await Order.findById({_id:id})
        order.quantity = req.body.quantity
        const o = await order.save()
        res.json(o)
    }
    catch (err) {
        res.send(err)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const order = await Order.findByIdAndRemove({ _id: id })
        return res.json(order)
    }
    catch (err) {
        return res.json(err)
    }
})
module.exports = router