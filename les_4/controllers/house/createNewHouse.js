const houseServices = require('../../service');

module.exports = async (req, res) => {
    try {
        const creatingHouse = req.body;

        const NewHouse = await houseServices.houseService.createHouse(creatingHouse);

        res.json(`Your new House`)

    } catch (e) {
        res.json(e.message)
    }
};