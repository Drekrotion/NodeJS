const dataBase = require('../../dataBase').getInstance();

module.exports = async (houseID, updatingDataHouse) => {
    const HouseModel = dataBase.getModel('House');

    await HouseModel.update(updatingDataHouse, {
        where: {
            id: houseID
        }
    });
};