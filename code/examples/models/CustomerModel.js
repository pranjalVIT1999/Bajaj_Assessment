const mongoose = require('mongoose')
const Schema = mongoose.Schema
const CustomerModel = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    orders: [
        {
            type: Schema.Types.ObjectId,
            ref:'Order'
        }
    ]
})

module.exports = mongoose.model('Customer',CustomerModel)