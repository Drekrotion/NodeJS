const userService = require('../../service');

module.exports = async (req, res) => {
    try {
        const creatingUser = req.body;

        const registerUser = await userService.userService.registerUser(creatingUser);

        res.json(`Your user has been registered please login in`);
    } catch (e) {
        res.json(e.message)
    }

};