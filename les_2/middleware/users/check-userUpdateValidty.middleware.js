const {userValidator} = require('../../validators');

module.exports = (req, res, next) => {
    try {
        const UpdateUserData = req.body;

        userValidator.updateUserValidator(UpdateUserData);

        next()

    }catch (e) {

        res.status(400).json(e.message)

    }

};