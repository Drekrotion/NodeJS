const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const creatingHouse = req.body;
        const HouseModel = dataBase.getModel('House');

        const createdHouse = await HouseModel.create(creatingHouse);

        res.json(`Your new House`)

    } catch (e) {
        res.json(e.message)
    }
};