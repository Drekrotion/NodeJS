const dataBase = require('../../dataBase').getInstance();

module.exports = async (userID, updatingData) => {
    const UserModel = dataBase.getModel('User');

    await UserModel.update(updatingData, {
        where: {
            id: userID
        }
    });
};

