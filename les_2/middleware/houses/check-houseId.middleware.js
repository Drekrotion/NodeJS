const { provider } = require('../../database');

module.exports = async (req, res, next) => {
    try {
        const {houseID} = req.params;
        const searchHouseId = `SELECT * FROM house WHERE id = ?`;

        const [validHouseId] = await provider.promise().query(searchHouseId, [houseID]);

        if (!validHouseId.length) {
            throw new Error('Not Found House')
        }

        [req.housId] = validHouseId;
        next()

    } catch (e) {
        res.status(400).json(e.message)
    }
};