const {houseService} = require('../../service');

module.exports = async (req, res, next) => {
    try {
        const {houseID} = req.params;

        const foundHouse = await houseService.getByIdHouse(houseID);

        if (!foundHouse) {
            throw new Error('House not found')
        }

        req.house = foundHouse;
        next();

    } catch (e) {
        res.status(400).json(e.message);
    }

};