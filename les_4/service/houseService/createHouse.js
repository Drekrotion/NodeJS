const dataBase = require('../../dataBase').getInstance();

module.exports = async creatingHouse => {
    const HouseModel = dataBase.getModel('House');

    const createdHouse = await HouseModel.create(creatingHouse);

    return createdHouse && createdHouse.dataValues;
};
