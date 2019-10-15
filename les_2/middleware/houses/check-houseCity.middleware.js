const { provider } = require('../../database');

module.exports = async (req, res, next) => {
    try {
        const {city} = req.body;
        const validCity = `SELECT * FROM house WHERE city = ?`;

        const [validHouse]  = await provider.promise().query(validCity, [city]);

        if (!validHouse.length) {
            throw new Error(`There is no home in ${city}`)
        }

        [req.houseValid] = validHouse;
        next()

    } catch (e) {
        res.status(400).json(e.message)
    }
};