const dataBase = require('../../dataBase').getInstance();

module.exports = async (email, password) => {
    const UserModel = dataBase.getModel('User');

    const findingUser = await UserModel.findOne({
        where: {
            email,
            password
        },
        attributes: ['id']
    });

    return findingUser && findingUser.dataValue;

};

