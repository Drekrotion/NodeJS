const dataBase = require('../../dataBase').getInstance();

module.exports = async id => {

    const UserModel = dataBase.getModel('User');

    const foundUser = await UserModel.findByPk(id);

    return foundUser && foundUser.dataValues;
};