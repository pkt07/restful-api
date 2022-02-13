const mongoose = require('mongoose')

const recordSchema = new mongoose.Schema({
    key: {
        type: String,
        trim: true
    },
    value: {
        type: String,
        trim: true
    },
    count: {
        type: Array,
    }
}, {
    timestamps: true
})
const recordModel =  mongoose.model('records', recordSchema)
module.exports = recordModel