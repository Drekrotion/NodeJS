// const dataBase = require('../../dataBase').getInstance();
const {authService} = require('../../service');

module.exports = async (req, res, next) => {
    try {
        const {email, password} = req.body;
        const findingUser = await authService.userAuthService(email, password);

        if (!findingUser) {
            throw new Error('Incorrect password or email')
        }

        req.user = findingUser;
        next()

    } catch (e) {
        res.status(400).json(e.message);
    }
};