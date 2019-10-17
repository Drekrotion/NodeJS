const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res, next) => {
    try {
        const {email, password} = req.body;
        const UserModel = dataBase.getModel('User');

        const findingUser = await UserModel.findOne({
            where: {
                email,
                password
            },
            attributes: ['id']
        });

        if (!findingUser) {
            throw new Error('Incorrect password or email')
        }

        req.user = findingUser.dataValues;
        next()

    } catch (e) {
        res.status(400).json(e.message);
    }
};