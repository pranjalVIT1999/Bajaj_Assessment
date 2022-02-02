const mongoose = require('mongoose')
const Schema = mongoose.Schema
const OrderModel = new Schema({
    productName: { type: String, required: true },
    quantity: { type: Number, required: true },
    customer: {
        type: Schema.Types.ObjectId,
        ref: 'Customer'
    }

})

module.exports = mongoose.model('Order', OrderModel)