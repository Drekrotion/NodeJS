const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const {houseID} = req.params;
        const updatingDataHouse = req.body;
        const HouseModel = dataBase.getModel('House');

        await HouseModel.update(updatingDataHouse, {
            where: {
                id: houseID
            }
        });

        res.redirect(`/houses/${houseID}`)

    } catch (e) {
        res.json(e.message)
    }
};