const dataBase = require('../../dataBase').getInstance();

module.exports = async houseID => {
    const HouseModel = dataBase.getModel('House');

    const foundHouse = await HouseModel.findByPk(houseID);

    return foundHouse && foundHouse.dataValues;
};