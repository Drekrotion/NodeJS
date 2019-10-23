const dataBase = require('../../dataBase').getInstance();

module.exports = async houseID => {

    const HouseModel = dataBase.getModel('House');

    await HouseModel.destroy({
        where: {
            id: houseID
        }
    });
};