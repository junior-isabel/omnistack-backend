const Booking = require('../models/Booking')

module.exports = {
    Store: async (req, res) => {
        const { spot_id } = req.params
        const { user_id } = req.headers
        const { date } = req.body
        
        const _booking = await Booking.create({
            spot: spot_id,
            user: user_id,
            date  
        })
        await _booking.populate('spot').populate('user').execPopulate()
        return res.json(_booking)
     }
}