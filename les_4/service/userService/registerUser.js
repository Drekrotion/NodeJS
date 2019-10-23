const dataBase = require('../../dataBase').getInstance();

module.exports = async creatingUser => {

    const UserModel = dataBase.getModel('User');

    const createdUser = await UserModel.create(creatingUser);

    return createdUser && createdUser.dataValues;
};