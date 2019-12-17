
const Spot = require('../models/Spot')
const User = require('../models/User')
module.exports = {
    Index: async (req, res) =>{
        const { tech } = req.query
        const _spots = await Spot.find({ techs: tech})
        
        return res.json(_spots)
    },
    Store: async (req, res) => {

        
        const { filename } = req.file
        const { company, price, techs } = req.body
        const { user_id } = req.headers
        const _user = await User.findById(user_id)

        if(!_user) {
            return res.status(400).json({
                error: 'user does not exists '
            })
        }
        const _spot = await Spot.create({
            thumbnail: filename,
            company,
            price,
            techs: techs.split(',').map(tech => tech.trim()),
            user: user_id
        })
        return res.json(_spot)
    }
}