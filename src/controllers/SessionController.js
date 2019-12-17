const User = require('../models/User')
module.exports = {
    Store: async (req, res) => {
        const { email } = req.body

        let user = await User.findOne({email: email})

        if(!user) {
            user = await User.create({email})
        }


        return res.json(user)
    }
}