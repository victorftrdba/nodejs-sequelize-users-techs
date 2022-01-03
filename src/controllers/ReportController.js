const User = require('../models/User');
const { Op } = require('sequelize');

module.exports = {
    async index(req, res) {
        const users = await User.findAll({
            attributes: ['name', 'email'],
            where: {
                email: {
                    [Op.like]: '%@gmail.com',
                }
            },
            include: [
                { association: 'addresses', where: { street: 'Rua Humberto Giraldi' }}
            ]
        })

        return res.json(users);
    }
}