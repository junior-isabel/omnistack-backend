const mongoose = require('mongoose')

const BookingSchema = new mongoose.Schema({
    approved: Boolean,
    date: String,
    spot: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Spot'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})


module.exports = mongoose.model('Booking', BookingSchema)