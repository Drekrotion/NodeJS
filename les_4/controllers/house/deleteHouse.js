const {houseService} = require('../../service');

module.exports = async (req, res) => {
    try {
        const {houseID} = req.params;

        const deleteHouse = await houseService.deleteHouse(houseID);

        res.json('House has been deleted')

    } catch (e) {
        res.json(e.message)
    }
};