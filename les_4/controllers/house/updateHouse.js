const {houseService} = require('../../service');

module.exports = async (req, res) => {
    try {
        const {houseID} = req.params;
        const updatingDataHouse = req.body;

        const updateHouse = await houseService.updateHouse(houseID, updatingDataHouse);

        res.redirect(`/houses/${houseID}`)

    } catch (e) {
        res.json(e.message)
    }
};