const userService = require('../../service');

module.exports = async (req, res) => {
    try {
        const {userID} = req.params;
        const updatingData = req.body;

        const userUpdating = userService.userService.updateUser(userID, updatingData);

        res.redirect(`/users/${userID}`)

    } catch (e) {
        res.json(e.message)
    }
};