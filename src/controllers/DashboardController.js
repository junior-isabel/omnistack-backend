const Spot = require('../models/Spot')
module.exports = {
    Show: async (req, res) => {
        const {user_id} = req.headers
       
        let spots = await Spot.find({user: user_id})

        return res.json(spots)
    }
}