const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const creatingUser = req.body;
        const UserModel = dataBase.getModel('User');

        const createdUser = await UserModel.create(creatingUser);

        res.json(`Your user with id:${createdUser.id} has been registered please login in`);
    }catch (e) {
        res.json(e.message)
    }

};