const {userService} = require('../../service');

module.exports = async (req, res, next) => {
    try {
        const {userID} = req.params;

        const foundUser = await userService.getByIdUser(userID);

        if (!foundUser) {
            throw new Error('User is not present')
        }

        req.user = foundUser;
        next();

    } catch (e) {
        res.status(400).json(e.message);
    }
};