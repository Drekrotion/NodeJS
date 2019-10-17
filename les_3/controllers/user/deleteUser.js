const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const {userID} = req.params;
        const UserModel = dataBase.getModel('User');

        UserModel.destroy({
            where: {
                id: userID
            }
        });

        res.json(`User id:${userID} has been deleted`)

    } catch (e) {
        res.status(400).json(e.message)
    }
};